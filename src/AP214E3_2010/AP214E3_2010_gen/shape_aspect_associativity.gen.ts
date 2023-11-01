
import { shape_aspect_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/shape_aspect_associativity.htm */
export  class shape_aspect_associativity extends shape_aspect_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SHAPE_ASPECT_ASSOCIATIVITY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SHAPE_ASPECT_ASSOCIATIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SHAPE_ASPECT_ASSOCIATIVITY
}
