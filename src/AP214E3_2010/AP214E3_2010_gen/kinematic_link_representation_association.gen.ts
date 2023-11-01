
import { representation_relationship } from "./index"
import { kinematic_link_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_link_representation_association.htm */
export  class kinematic_link_representation_association extends representation_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION
  }
  private SELF\representation_relationship.rep_1_? : kinematic_link_representation

  public get SELF\representation_relationship.rep_1() : kinematic_link_representation {
    if ( this.SELF\representation_relationship.rep_1_ === void 0 ) {
      this.SELF\representation_relationship.rep_1_ = this.extractElement( 4, false, kinematic_link_representation )
    }

    return this.SELF\representation_relationship.rep_1_ as kinematic_link_representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION
}
