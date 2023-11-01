
import { product_definition_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_usage.htm */
export  class product_definition_usage extends product_definition_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_USAGE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_USAGE, EntityTypesIfc.MAKE_FROM_USAGE_OPTION, EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE, EntityTypesIfc.NEXT_ASSEMBLY_USAGE_OCCURRENCE, EntityTypesIfc.SPECIFIED_HIGHER_USAGE_OCCURRENCE, EntityTypesIfc.PROMISSORY_USAGE_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_USAGE
}
