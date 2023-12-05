
import { contract_assignment } from "./index"
import { drawing_revision } from "./index"
import { executed_action } from "./index"
import { product_definition_formation } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/applied_contract_assignment.htm */
export  class applied_contract_assignment extends contract_assignment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLIED_CONTRACT_ASSIGNMENT
  }
  private items_? : Array<drawing_revision | executed_action | product_definition_formation>

  public get items() : Array<drawing_revision | executed_action | product_definition_formation> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<drawing_revision | executed_action | product_definition_formation> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof drawing_revision ) && !( value1Untyped instanceof executed_action ) && !( value1Untyped instanceof product_definition_formation ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (drawing_revision | executed_action | product_definition_formation)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<drawing_revision | executed_action | product_definition_formation>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLIED_CONTRACT_ASSIGNMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLIED_CONTRACT_ASSIGNMENT
}
