
import { text_literal } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimension_text_associativity.htm */
export  class dimension_text_associativity extends text_literal {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSION_TEXT_ASSOCIATIVITY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSION_TEXT_ASSOCIATIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSION_TEXT_ASSOCIATIVITY
}
