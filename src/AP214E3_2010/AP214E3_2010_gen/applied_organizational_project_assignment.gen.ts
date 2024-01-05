
import { organizational_project_assignment } from "./index"
import { assembly_component_usage } from "./index"
import { configuration_item } from "./index"
import { executed_action } from "./index"
import { product } from "./index"
import { product_concept } from "./index"
import { product_definition } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/applied_organizational_project_assignment.htm */
export  class applied_organizational_project_assignment extends organizational_project_assignment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLIED_ORGANIZATIONAL_PROJECT_ASSIGNMENT
  }
  private items_? : Array<assembly_component_usage | configuration_item | executed_action | product | product_concept | product_definition | product_definition_formation>

  public get items() : Array<assembly_component_usage | configuration_item | executed_action | product | product_concept | product_definition | product_definition_formation> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<assembly_component_usage | configuration_item | executed_action | product | product_concept | product_definition | product_definition_formation> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined = 
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof assembly_component_usage ) && !( value1Untyped instanceof configuration_item ) && !( value1Untyped instanceof executed_action ) && !( value1Untyped instanceof product ) && !( value1Untyped instanceof product_concept ) && !( value1Untyped instanceof product_definition ) && !( value1Untyped instanceof product_definition_formation ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (assembly_component_usage | configuration_item | executed_action | product | product_concept | product_definition | product_definition_formation)
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

    return this.items_ as Array<assembly_component_usage | configuration_item | executed_action | product | product_concept | product_definition | product_definition_formation>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLIED_ORGANIZATIONAL_PROJECT_ASSIGNMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLIED_ORGANIZATIONAL_PROJECT_ASSIGNMENT
}
