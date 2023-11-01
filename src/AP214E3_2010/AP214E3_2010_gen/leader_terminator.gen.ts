
import { terminator_symbol } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/leader_terminator.htm */
export  class leader_terminator extends terminator_symbol {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LEADER_TERMINATOR
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LEADER_TERMINATOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LEADER_TERMINATOR
}
