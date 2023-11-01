
import { pre_defined_terminator_symbol } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/vector_style.htm */
export  class vector_style extends pre_defined_terminator_symbol {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VECTOR_STYLE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VECTOR_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VECTOR_STYLE
}
