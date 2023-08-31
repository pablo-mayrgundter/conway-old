import { Entity } from '../core/entity'
import { EntityDescription, EntityFieldsDescription } from '../core/entity_description'
import { EntityFieldDescription, EntityStringFieldDescription } from '../core/entity_field_description'
import {
  stepExtractBinary,
  stepExtractBoolean,
  stepExtractInlineElemement,
  stepExtractLogical,
  stepExtractNumber,
  stepExtractOptional,
  stepExtractReference,
  stepExtractString,
} from './parsing/step_deserialization_functions'
import { StepEntityConstructorAbstract } from './step_entity_constructor'
import StepEntityInternalReference from './step_entity_internal_reference'
import StepModelBase from './step_model_base'

/**
 * Merge the entity field descriptions.
 *
 * Merging uses "hasOwnProperty" semantics to avoid overwriting
 * keys that have already been merged.
 *
 * @param to Merge to this fields object.
 * @param from Merge from this fields object.
 */
function merge<EntityTypeIDs extends number>(
    to: EntityFieldsDescription< EntityTypeIDs >,
    from: EntityFieldsDescription< EntityTypeIDs > ): void {

  for ( const key of Object.keys( from ) ) {

    // eslint-disable-next-line no-prototype-builtins
    if ( !to.hasOwnProperty( key ) ) {

      to[ key ] = from[ key ]

    }
  }
}

/**
 * The base type for entities parsed from STEP.
 */
export default abstract class StepEntityBase<EntityTypeIDs extends number> implements Entity {
  /**
   * Get the final type of this STEP entity.
   */
  public abstract get type(): EntityTypeIDs

  /**
   * Get the reflecterd type info for this element/entity.
   *
   * @return {EntityDescription} The entity description for this.
   */
  public get typeInfo(): EntityDescription< EntityTypeIDs > {

    const localType = this.type

    return this.model.schema.reflection[ localType ]
  }

  /**
   * Get the reflected fields of this.
   *
   * @return {EntityFieldsDescription}
   */
  public get fields(): EntityFieldsDescription< EntityTypeIDs > {

    const fields = {} as EntityFieldsDescription< EntityTypeIDs >

    let typeID: EntityTypeIDs | undefined = this.type

    while ( typeID !== void 0 ) {

      const localTypeInfo: EntityDescription< EntityTypeIDs > =
        this.model.schema.reflection[ typeID ]

      merge( fields, localTypeInfo.fields )

      typeID = localTypeInfo.superType
    }

    return fields
  }

  /**
   * Get the reflected fields of this.
   *
   * @return {EntityFieldsDescription}
   */
  public get orderedFields(): [string, EntityFieldDescription< EntityTypeIDs >][] {

    const fields         = [] as [string, EntityFieldDescription< EntityTypeIDs >][]
    const internalFields = this.fields

    Object.keys( internalFields ).reduce< [string, EntityFieldDescription< EntityTypeIDs >][] >(
        ( previous, current ) => {

          // eslint-disable-next-line no-prototype-builtins
          if ( internalFields.hasOwnProperty( current ) ) {

            const field = internalFields[ current ]

            if ( field.offset !== void 0 ) {
              previous.push( [current, internalFields[ current ]] )
            }
          }

          return previous
        }, fields )

    fields.sort( ( a, b ) => (a[ 1 ].offset as number) - (b[ 1 ].offset as number) )

    return fields
  }

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
   * @param optional Whether this is a potentially optional field
   * @return {number | null | undefined} The extracted number.
   */
  public extractNumber( offset: number, optional: true ): number | null
  // eslint-disable-next-line no-dupe-class-members
  public extractNumber( offset: number, optional: false ): number
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractNumber( offset: number, optional: boolean ): number |
   null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {string | null} The extracted string, or null if optional
   * and this value isn't specified.
   */
  public extractString( offset: number, optional: true ): string | null
  // eslint-disable-next-line no-dupe-class-members
  public extractString( offset: number, optional: false ): string
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractString( offset: number, optional: boolean ): string |
   null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {boolean | null} The extracted logical or null for optionals.
   */
  public extractLogical( offset: number, optional: true ): boolean | null
  // eslint-disable-next-line no-dupe-class-members
  public extractLogical( offset: number, optional: false ): boolean
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractLogical( offset: number, optional: boolean ): boolean | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
   * @param offset The offset in the vtable to extract from
   * @param extractor The function to be used for extraction.
   * @param optional Is this an optional field? (true)
   * @return {ExtractionType | null} The extracted value or null for optionals.
   */
  public extractLambda< ExtractionType >(
    offset: number,
    extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
      ExtractionType | null | undefined,
    optional: true ): ExtractionType | null
  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @typedef ExtractionType Type to be extracted
   * @param offset The offset in the vtable to extract from
   * @param extractor The function to be used for extraction.
   * @param optional Is this an optional field? (false)
   * @return {ExtractionType} The extracted value or null for optionals.
   */
  // eslint-disable-next-line no-dupe-class-members
  public extractLambda< ExtractionType >(
    offset: number,
    extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
      ExtractionType | undefined,
    optional: false): ExtractionType
  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @typedef ExtractionType Type to be extracted
   * @param offset The offset in the vtable to extract from
   * @param extractor The function to be used for extraction.
   * @param optional Is this an optional field?
   * @return {ExtractionType | null} The extracted value or null for optionals.
   */
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractLambda< ExtractionType >(
      offset: number,
      extractor: ( buffer: Uint8Array, cursor: number, endCursor: number ) =>
        ExtractionType | null | undefined,
      optional: boolean ): ExtractionType | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field? (true)
   * @return {StepEntityBase | null} The extracted element, or null if optional
   * and this value isn't specified.
   */
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
    offset: number,
    optional: true,
    entityConstructor: T ):
      InstanceType< T > | null
  /**
   * Extract a string at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field? (false)
   * @return {StepEntityBase} The extracted element.
   */
  // eslint-disable-next-line no-dupe-class-members
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
    offset: number,
    optional: false,
    entityConstructor: T ):
      InstanceType< T >
  /**
   * Extract a string at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {StepEntityBase} The extracted element, or null if optional
   * and this value isn't specified.
   */
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractElement< T extends StepEntityConstructorAbstract< EntityTypeIDs > >(
      offset: number,
      optional: boolean,
      entityConstructor: T ):
      InstanceType< T > | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

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
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field? (true)
   * @return {boolean | null} The extracted number or null if it's
   * not supplied.
   */
  public extractBoolean( offset: number, optional: true ): boolean | null
  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field? (false).
   * @return {boolean} The extracted number.
   */
  // eslint-disable-next-line no-dupe-class-members
  public extractBoolean( offset: number, optional: false ): boolean
  /**
   * Extract a number at the particular vtable offset (i.e. the position
   * in the matching step object).
   *
   * Used by other extraction methods with wrappers to perform
   * semantically correct extraction.
   *
   * @param offset The offset in the vtable to extract from
   * @param optional Is this an optional field?
   * @return {boolean | null} The extracted number or null if it's
   * not supplied.
   */
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  public extractBoolean( offset: number, optional: boolean ): boolean | null {

    this.guaranteeVTable()

    const internalReference =
      this.internalReference_ as Required< StepEntityInternalReference< EntityTypeIDs > >

    if ( offset >= internalReference.vtableCount ) {
      throw new Error( 'Couldn\'t read field due to too few fields in record' )
    }

    const vtableSlot = internalReference.vtableIndex + offset

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
