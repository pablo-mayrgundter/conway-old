
import { draughting_callout } from "./index"
import { presentation_layer_assignment } from "./index"
import { representation } from "./index"
import { styled_item } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/invisibility.htm */
export  class invisibility extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.INVISIBILITY
  }
  private invisible_items_? : Array<draughting_callout | presentation_layer_assignment | representation | styled_item>

  public get invisible_items() : Array<draughting_callout | presentation_layer_assignment | representation | styled_item> {
    if ( this.invisible_items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<draughting_callout | presentation_layer_assignment | representation | styled_item> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined = 
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof draughting_callout ) && !( value1Untyped instanceof presentation_layer_assignment ) && !( value1Untyped instanceof representation ) && !( value1Untyped instanceof styled_item ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (draughting_callout | presentation_layer_assignment | representation | styled_item)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.invisible_items_ = value
    }

    return this.invisible_items_ as Array<draughting_callout | presentation_layer_assignment | representation | styled_item>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.INVISIBILITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.INVISIBILITY
}
