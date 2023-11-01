
import { product_definition_process } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_process_plan.htm */
export  class product_process_plan extends product_definition_process {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_PROCESS_PLAN
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_PROCESS_PLAN ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_PROCESS_PLAN
}
