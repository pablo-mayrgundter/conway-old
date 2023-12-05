
import { representation_item } from "./index"
import { precision_qualifier } from "./index"
import { type_qualifier } from "./index"
import { uncertainty_qualifier } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/qualified_representation_item.htm */
export  class qualified_representation_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.QUALIFIED_REPRESENTATION_ITEM
  }
  private qualifiers_? : Array<precision_qualifier | type_qualifier | uncertainty_qualifier>

  public get qualifiers() : Array<precision_qualifier | type_qualifier | uncertainty_qualifier> {
    if ( this.qualifiers_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<precision_qualifier | type_qualifier | uncertainty_qualifier> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof precision_qualifier ) && !( value1Untyped instanceof type_qualifier ) && !( value1Untyped instanceof uncertainty_qualifier ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (precision_qualifier | type_qualifier | uncertainty_qualifier)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.qualifiers_ = value
    }

    return this.qualifiers_ as Array<precision_qualifier | type_qualifier | uncertainty_qualifier>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.QUALIFIED_REPRESENTATION_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.QUALIFIED_REPRESENTATION_ITEM
}
