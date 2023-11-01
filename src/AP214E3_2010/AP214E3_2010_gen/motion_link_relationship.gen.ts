
import { representation_relationship } from "./index"
import { founded_kinematic_path } from "./index"
import { kinematic_link_representation } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/motion_link_relationship.htm */
export  class motion_link_relationship extends representation_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MOTION_LINK_RELATIONSHIP
  }
  private SELF\representation_relationship.rep_1_? : founded_kinematic_path
  private SELF\representation_relationship.rep_2_? : kinematic_link_representation
  private related_frame_? : axis2_placement_3d

  public get SELF\representation_relationship.rep_1() : founded_kinematic_path {
    if ( this.SELF\representation_relationship.rep_1_ === void 0 ) {
      this.SELF\representation_relationship.rep_1_ = this.extractElement( 4, false, founded_kinematic_path )
    }

    return this.SELF\representation_relationship.rep_1_ as founded_kinematic_path
  }

  public get SELF\representation_relationship.rep_2() : kinematic_link_representation {
    if ( this.SELF\representation_relationship.rep_2_ === void 0 ) {
      this.SELF\representation_relationship.rep_2_ = this.extractElement( 5, false, kinematic_link_representation )
    }

    return this.SELF\representation_relationship.rep_2_ as kinematic_link_representation
  }

  public get related_frame() : axis2_placement_3d {
    if ( this.related_frame_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 6, false )

      if ( !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.related_frame_ = value as (axis2_placement_3d)

    }

    return this.related_frame_ as axis2_placement_3d
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MOTION_LINK_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MOTION_LINK_RELATIONSHIP
}
