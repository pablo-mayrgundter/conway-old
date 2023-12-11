
import { symbol_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/draughting_subfigure_representation.htm */
export  class draughting_subfigure_representation extends symbol_representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAUGHTING_SUBFIGURE_REPRESENTATION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAUGHTING_SUBFIGURE_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAUGHTING_SUBFIGURE_REPRESENTATION
}