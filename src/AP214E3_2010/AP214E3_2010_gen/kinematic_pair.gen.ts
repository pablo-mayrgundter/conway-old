
import { item_defined_transformation } from "./index"
import { kinematic_joint } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_pair.htm */
export  class kinematic_pair extends item_defined_transformation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_PAIR
  }
  private joint_? : kinematic_joint

  public get joint() : kinematic_joint {
    if ( this.joint_ === void 0 ) {
      this.joint_ = this.extractElement( 4, false, kinematic_joint )
    }

    return this.joint_ as kinematic_joint
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_PAIR
}
