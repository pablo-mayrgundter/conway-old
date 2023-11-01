
import { kinematic_link } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_joint.htm */
export  class kinematic_joint extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_JOINT
  }
  private first_link_? : kinematic_link
  private second_link_? : kinematic_link

  public get first_link() : kinematic_link {
    if ( this.first_link_ === void 0 ) {
      this.first_link_ = this.extractElement( 0, false, kinematic_link )
    }

    return this.first_link_ as kinematic_link
  }

  public get second_link() : kinematic_link {
    if ( this.second_link_ === void 0 ) {
      this.second_link_ = this.extractElement( 1, false, kinematic_link )
    }

    return this.second_link_ as kinematic_link
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_JOINT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_JOINT
}
