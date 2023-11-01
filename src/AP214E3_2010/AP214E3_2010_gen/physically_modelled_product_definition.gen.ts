
import { product_definition_with_associated_documents } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/physically_modelled_product_definition.htm */
export  class physically_modelled_product_definition extends product_definition_with_associated_documents {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PHYSICALLY_MODELLED_PRODUCT_DEFINITION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PHYSICALLY_MODELLED_PRODUCT_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PHYSICALLY_MODELLED_PRODUCT_DEFINITION
}
