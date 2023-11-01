
import { annotation_occurrence_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_occurrence_associativity.htm */
export  class annotation_occurrence_associativity extends annotation_occurrence_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_OCCURRENCE_ASSOCIATIVITY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_OCCURRENCE_ASSOCIATIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_OCCURRENCE_ASSOCIATIVITY
}
