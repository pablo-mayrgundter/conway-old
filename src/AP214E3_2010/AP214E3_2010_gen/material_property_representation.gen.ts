
import { property_definition_representation } from "./index"
import { data_environment } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/material_property_representation.htm */
export  class material_property_representation extends property_definition_representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MATERIAL_PROPERTY_REPRESENTATION
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MATERIAL_PROPERTY_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MATERIAL_PROPERTY_REPRESENTATION
}
