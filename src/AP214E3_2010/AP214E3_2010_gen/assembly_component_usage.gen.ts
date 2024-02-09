
import { product_definition_usage } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class assembly_component_usage extends product_definition_usage {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ASSEMBLY_COMPONENT_USAGE
  }
  private reference_designator_? : string | null

  public get reference_designator() : string | null {
    if ( this.reference_designator_ === void 0 ) {
      this.reference_designator_ = this.extractString( 5, true )
    }

    return this.reference_designator_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ASSEMBLY_COMPONENT_USAGE, EntityTypesAP214.NEXT_ASSEMBLY_USAGE_OCCURRENCE, EntityTypesAP214.SPECIFIED_HIGHER_USAGE_OCCURRENCE, EntityTypesAP214.PROMISSORY_USAGE_OCCURRENCE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ASSEMBLY_COMPONENT_USAGE
}
