
import { action_resource } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_resource.htm */
export  class product_definition_resource extends action_resource {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_RESOURCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_RESOURCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_RESOURCE
}