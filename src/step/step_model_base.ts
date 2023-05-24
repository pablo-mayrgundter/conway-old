import { StepIndexEntry } from './parsing/step_parser'
import StepVtableBuilder from './parsing/step_vtable_builder'
import StepEntityBase from './step_entity_base'
import StepEntitySchema from './step_entity_schema'
import { StepEntityInternalReferencePrivate } from './step_entity_internal_reference'
import { IIndexSetCursor } from '../core/i_index_set_cursor'
import { extractOneHotLow } from '../indexing/bit_operations'
import { MultiIndexSet } from '../indexing/multi_index_set'
import { StepEntityConstructorAbstract } from './step_entity_constructor'

/**
 * The base for models parsed from STEP.
 */
export default abstract class StepModelBase<
  EntityTypeIDs extends number,
  BaseEntity extends StepEntityBase<EntityTypeIDs> = StepEntityBase<EntityTypeIDs> >
implements Iterable<BaseEntity> {
  public readonly abstract typeIndex: MultiIndexSet<EntityTypeIDs>;

  private readonly vtableBuilder_: StepVtableBuilder = new StepVtableBuilder()
  private readonly expressIDMap_ = new Map<number, number>()
  private readonly inlineAddressMap_ = new Map<number, number>()
  private readonly elementIndex_: StepEntityInternalReferencePrivate<EntityTypeIDs, BaseEntity>[]

  /**
   * Construct this step model with its matching schema, a buffer to read from and an element index.
   *
   * @param schema The Step schema this is based on.
   * @param buffer_ The buffer to read this from.
   * @param elementIndex The element index for this, parsed or deserialized - note this takes
   * ownership of this array in the sense it will modify values/unfold inline elements etc.
   */
  constructor(
    public readonly schema: StepEntitySchema<EntityTypeIDs, BaseEntity>,
    private readonly buffer_: Uint8Array, elementIndex: StepIndexEntry<EntityTypeIDs>[]) {

    const localElementIndex: StepEntityInternalReferencePrivate<EntityTypeIDs, BaseEntity>[] =
      elementIndex

    let indexId = 0
    let where = 0

    const inlineAddressMap = this.inlineAddressMap_

    while (where < localElementIndex.length) {
      const element = localElementIndex[where]

      if (element.inlineEntities !== void 0) {
        let inlineLocalId = localElementIndex.length

        localElementIndex.push(...element.inlineEntities)

        // We're going to map inline elements backwards.
        for (; inlineLocalId < localElementIndex.length; ++inlineLocalId) {
          inlineAddressMap.set(localElementIndex[inlineLocalId].address, inlineLocalId)
        }
      }

      ++where
    }

    // Continguous dense array map from express IDs.
    for (const element of elementIndex) {
      if (element.expressID !== void 0) {
        this.expressIDMap_.set(element.expressID, indexId++)
      }
    }

    this.elementIndex_ = localElementIndex
  }

  /**
   * Force the population of the the vtable entry for a particular ID
   * (i.e. extracting the field locations)
   *
   * @param localID The id to fetch the vtable entry for.
   * @throws {Error} Throws an error if the ID is invalid.
   * @return {boolean} Did the vtable entry populate correctly?
   */
  public populateVtableEntry(localID: number): boolean {
    if (localID > this.elementIndex_.length) {
      throw new Error(`Invalid localID ${localID}`)
    }

    const element = this.elementIndex_[localID]

    if (element.vtableIndex !== void 0) {
      return true
    }

    const extratedEntry =
      this.schema.parser.extractDataEntry(
          this.buffer_,
          element.address,
          element.address + element.length,
          this.vtableBuilder_)

    if (extratedEntry === void 0) {
      return false
    }

    element.vtableIndex = extratedEntry[ 0 ]
    element.vtableCount = extratedEntry[ 1 ]
    element.buffer = this.buffer_
    element.vtable = this.vtableBuilder_.buffer

    return true
  }

  /**
   * Get the number of elements/entities in this model.
   *
   * @return {number} The number of elements.
   */
  public get size(): number {
    return this.elementIndex_.length
  }

  /**
   * Get an inline element by its address within a data-block.
   *
   * @param address The addres to get the element from
   * @return {object | undefined} The element if one exsists at
   * that adddress, otherwise undefined.
   */
  public getInlineElementByAddress(address: number | undefined): BaseEntity | undefined {
    if (address === void 0) {
      return
    }

    const localID = this.inlineAddressMap_.get(address)

    if (localID === void 0) {
      return
    }

    return this.getElementByLocalID(localID)
  }

  /**
   * Given an express ID, return the matching element if one exists.
   *
   * @param {number} expressID The express ID to fetch the element for.
   * @return {object | undefined} The element if one exists for that ID,
   * otherwise undefined.
   */
  public getElementByExpressID(expressID: number): BaseEntity | undefined {
    const localID = this.expressIDMap_.get(expressID)

    if (localID === void 0) {
      return
    }

    return this.getElementByLocalID(localID)
  }

  /**
   * Given a local ID (i.e. dense index/reference), return the matching element if one
   * exists.
   *
   * @param {number} localID The local ID to fetch for.
   * @return {object | undefined} The matching element or undefined
   * if none exists.
   */
  public getElementByLocalID(localID: number): BaseEntity | undefined {
    if (localID > this.elementIndex_.length) {
      return
    }

    const element = this.elementIndex_[localID]

    let entity = element.entity

    if (entity === void 0 && element.typeID !== void 0) {
      // TODO - we actually need to make this handle unknown type IDs by adding
      // an ENTITY_UNKNOWN type - CS
      const constructorRead = this.schema.constructors[element.typeID]

      if (constructorRead !== void 0) {
        // eslint-disable-next-line new-cap -- This is a variable constructor.
        entity = new constructorRead(localID, element, this)

        element.entity = entity
      }
    }

    return entity
  }

  /**
   * Use the type index to get set of entities of a set of types including sub-types, acts
   * as a union given the input type list, with lazy iteration over the set.
   *
   * @param types The list of types to return
   * @return {IterableIterator} An iterable corresponding to
   * the lazy set of items.
   */
  public types<T extends StepEntityConstructorAbstract<EntityTypeIDs>[]>(...types: T):
    IterableIterator<InstanceType<T[number]>> {
    const distinctTypes = types.length === 1 ? (types[0].query) :
      (new Set(types.flatMap((type) => type.query)))

    return this.from(
        this.typeIndex.cursor(...distinctTypes),
        true) as IterableIterator<InstanceType<T[number]>>
  }

  /**
   * Use the type index to get set of entities of a set of types not including sub-types from
   * the list of type ids, acts as a union given the input type list, with lazy iteration over
   * the set.
   *
   * @param types The type ids for the types to get.
   * @return {IterableIterator} An iterable corresponding to the lazy set of items.
   */
  public typeIDs(...types: EntityTypeIDs[]): IterableIterator<BaseEntity> {
    const distinctTypes = types.length === 1 ? (this.schema.queries[types[0] as number]) :
    (new Set(types.flatMap((type) => this.schema.queries[type as number])))

    return this.from(this.typeIndex.cursor(...distinctTypes), true)
  }

  /**
   * Use the type index to get set of entities of a set of types including sub-types from the
   * list of type ids, acts as a union given the input type list, with lazy
   * iteration over the set.
   *
   * @param types The type ids for the types to get.
   * @return {IterableIterator} An iterable corresponding to the lazy set of items.
   */
  public typesIDSNoSubtypes(...types: EntityTypeIDs[]): IterableIterator<BaseEntity> {
    return this.from(this.typeIndex.cursor(...types), true)
  }

  /**
   * Given a cursor, get the matching entities for it as a lazy iterable iterator.
   *
   * @param cursor The cursor to iterate over.
   * @param freeCursor Should the cursor be freed after
   * @return {IterableIterator} The iterable iterator to allow lazy
   * iteration over a cursor.
   * @yields An element per iteration matching the ids in the cursor.
   */
  public* from(cursor: IIndexSetCursor, freeCursor: boolean = false): IterableIterator<BaseEntity> {
    while (cursor.step()) {
      const high = cursor.high
      let low = cursor.low

      while (low !== 0) {
        const lowestOneHot = extractOneHotLow(low)

        low ^= (1 << lowestOneHot)

        const localID = (high | lowestOneHot)

        const foundElement = this.getElementByLocalID(localID)

        if (foundElement !== void 0) {
          yield foundElement
        }
      }
    }

    if (freeCursor) {
      cursor.free()
    }
  }

  /**
   * Extract a set of elements given a local ID iterator.
   *
   * @param from An iterable of local IDs
   * @return {IterableIterator} The iterable iterator to allow lazy
   * iteration over the elements matching the local ids.
   * @yields An element per iteration matching the ids in from.
   */
  public* extract(from: Iterable<number>): IterableIterator<BaseEntity> {
    for (const localID of from) {
      const foundElement = this.getElementByLocalID(localID)

      if (foundElement !== void 0) {
        yield foundElement
      }
    }
  }

  /**
   * Iterate over all the elements in this.
   *
   * @return {IterableIterator} The iterable iterator to allow lazy
   * iteration over all the elements in this.
   * @yields An element per iteration for all the elements in this.
   */
  public* [Symbol.iterator](): IterableIterator<BaseEntity> {
    for (let localID = 0, endID = this.elementIndex_.length; localID < endID; ++localID) {
      const foundElement = this.getElementByLocalID(localID)

      if (foundElement !== void 0) {
        yield foundElement
      }
    }
  }
}
