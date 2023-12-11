
import { representation } from "./index"
import { kinematic_path } from "./index"
import { geometric_representation_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/founded_kinematic_path.htm */
export  class founded_kinematic_path extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FOUNDED_KINEMATIC_PATH
  }





  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FOUNDED_KINEMATIC_PATH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FOUNDED_KINEMATIC_PATH
}