
import { property_definition_representation } from "./index"
import { data_environment } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class material_property_representation extends property_definition_representation {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.MATERIAL_PROPERTY_REPRESENTATION
  }
  private dependent_environment_? : data_environment

  public get dependent_environment() : data_environment {
    if ( this.dependent_environment_ === void 0 ) {
      this.dependent_environment_ = this.extractElement( 2, false, data_environment )
    }

    return this.dependent_environment_ as data_environment
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.MATERIAL_PROPERTY_REPRESENTATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.MATERIAL_PROPERTY_REPRESENTATION
}
