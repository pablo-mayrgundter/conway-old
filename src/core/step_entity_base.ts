import {
  stepExtractBinary,
  stepExtractBoolean,
  stepExtractInlineElemement,
  stepExtractLogical,
  stepExtractNumber,
  stepExtractOptional,
  stepExtractReference,
  stepExtractString
} from '../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'
import EntityTypesIfc from '../gen/ifc/entity_types_ifc.gen'
import { StepEntityConstructorAbstract } from './step_entity_constructor'
import StepEntityInternalReference from './step_entity_internal_reference'
import StepModelBase from './step_model_base'

/**
 * The base type for entities parsed from STEP.
 */
export default abstract class StepEntityBase<EntityTypeIDs extends number> {
  /**
   * Get the final type of this STEP entity.
   */
  public abstract get type(): EntityTypeIDs

  /**
   * Get the number of dimensions for this, some functions require every object to have this,
   *
   * The default value is 0.
   *
   * @return {number} The number of dimensions.
   */
  public get Dim(): number {
    return 0
  }

  /**
   * Get the express ID for this, note that if an element is inlined,
   * it will have not have an express ID.
   *
   * @return {number | undefined} The express ID of this or undefined if there isn't one.
   */
  public get expressID(): number | undefined {
    return this.internalReference_.expressID
  }

  /**
   * Is this an inline element or fully specified?
   *
   * @return {boolean} Is this inline?
   */
  public get isInline(): boolean {
    return this.expressID === void 0
  }

  /**
   * Convert this to a string (which is the equivalent to a reference or
   * '#inline' for inline elements).
   *
   * @return {string} Convert this to a string
   */
  public toString(): string {
    return `#${this.expressID ?? 'inline'}`
  }

  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @return {number | null | undefined} The extracted number.
   */
  public extractNumber( vtableOffset: number, optional: true ): number | null
  // eslint-disable-next-line no-dupe-class-members
  public extractNumber( vtableOffset: number, optional: false ): number
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractNumber( vtableOffset: number, optional: boolean ): number |
   null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = stepExtractNumber( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }

  /**
   * Extract a string at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {string | null} The extracted string, or null if optional
   * and this value isn't specified.
   */
  public extractString( vtableOffset: number, optional: true ): string | null
  // eslint-disable-next-line no-dupe-class-members
  public extractString( vtableOffset: number, optional: false ): string
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractString( vtableOffset: number, optional: boolean ): string |
   null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = stepExtractString( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }


  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {boolean | null} The extracted logical or null for optionals.
   */
  public extractLogical( vtableOffset: number, optional: true ): boolean | null
  // eslint-disable-next-line no-dupe-class-members
  public extractLogical( vtableOffset: number, optional: false ): boolean
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractLogical( vtableOffset: number, optional: boolean ): boolean | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = stepExtractLogical( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }

  /**
   * Extract a reference from a buffer, without type check.
   *
   * @param buffer The buffer to extract from.
   * @param cursor The position in the buffer to extract from.
   * @param endCursor The ending cursor.
   * @return {StepEntityBase | undefined} Extracted entity or undefined.
   */
  protected extractBufferReference(
      buffer: Uint8Array,
      cursor: number,
      endCursor: number ): StepEntityBase< EntityTypeIDs > | undefined {

    const expressID = stepExtractReference( buffer, cursor, endCursor )
    const value : StepEntityBase< EntityTypeIDs > | undefined =
      expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
      (this.model.getInlineElementByAddress(
          stepExtractInlineElemement( buffer, cursor, endCursor )))

    return value
  }

  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @typedef ExtractionType Type to be extracted
   * @param vtableOffset The offset in the vtable to extract from
   * @param extractor The function to be used for extraction.
   * @param optional Is this an optional field?
   * @return {ExtractionType | null} The extracted value or null for optionals.
   */
  public extractLambda< ExtractionType >(
    vtableOffset: number,
    extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
      ExtractionType | null | undefined,
    optional: true ): ExtractionType | null
  // eslint-disable-next-line no-dupe-class-members
  public extractLambda< ExtractionType >(
    vtableOffset: number,
    extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
      ExtractionType | undefined,
    optional: false): ExtractionType
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractLambda< ExtractionType >(
      vtableOffset: number,
      extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
        ExtractionType | null | undefined,
      optional: boolean ): ExtractionType | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = extractor( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }


  /**
   * Extract a string at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {StepEntityBase | null} The extracted element, or null if optional
   * and this value isn't specified.
   */
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
    vtableOffset: number,
    optional: true,
    entityConstructor: T ):
      InstanceType< T > | null
  // eslint-disable-next-line no-dupe-class-members
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
    vtableOffset: number,
    optional: false,
    entityConstructor: T ):
      InstanceType< T >
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
      vtableOffset: number,
      optional: boolean,
      entityConstructor: T ):
      InstanceType< T > | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const expressID = stepExtractReference( buffer, cursor, endCursor )
    const value =
      expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
      this.model.getInlineElementByAddress(
          stepExtractInlineElemement( buffer, cursor, endCursor ) )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    if ( !( value instanceof entityConstructor ) ) {
      throw new Error( 'Value in STEP was incorrectly typed for field' )
    }

    return value as InstanceType< T >
  }

  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {boolean | null} The extracted number.
   */
  public extractBinary( vtableOffset: number, optional: true ): [Uint8Array, number ] | null
  // eslint-disable-next-line no-dupe-class-members
  public extractBinary( vtableOffset: number, optional: false ): [Uint8Array, number ]
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractBinary( vtableOffset: number, optional: boolean ): [Uint8Array, number ] | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = stepExtractBinary( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }

  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param vtableOffset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {boolean | null} The extracted number.
   */
  public extractBoolean( vtableOffset: number, optional: true ): boolean | null
  // eslint-disable-next-line no-dupe-class-members
  public extractBoolean( vtableOffset: number, optional: false ): boolean
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractBoolean( vtableOffset: number, optional: boolean ): boolean | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

    if ( vtableOffset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + vtableOffset

    const cursor    = internalReference.vtable[ vtableSlot ]
    const buffer    = internalReference.buffer
    const endCursor = buffer.length

    const value = stepExtractBoolean( buffer, cursor, endCursor )

    if ( value === void 0 ) {
      if ( !optional ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return null
    }

    return value
  }

  /**
   * Construct this with the local ID, internal reference and
   * the model.
   *
   * @param localID The local (dense) ID within the model, that acts as a reference.
   * @param internalReference_  The internal reference to model components etc.
   * @param model The model this came from.
   */
  /* eslint-disable no-useless-constructor, require-jsdoc, no-empty-function */
  /* Note that ES lint doesn't parse the typescript meaning of this constructor
   * correctly. */
  constructor(
    public readonly localID: number,
    protected readonly internalReference_: StepEntityInternalReference<EntityTypeIDs>,
    public readonly model: StepModelBase<EntityTypeIDs>) {}
  /* eslint-enable no-useless-constructor, require-jsdoc, no-empty-function */

  /**
   * Guarantees the VTable of this has been parsed from the model so that values can be read out.
   */
  protected guaranteeVTable(): void {
    if (this.internalReference_.vtableIndex === void 0) {
      const populated = this.model.populateVtableEntry(this.localID)

      if (!populated) {
        throw new Error('Entity does not have matching table entry to read from model')
      }
    }
  }
}
