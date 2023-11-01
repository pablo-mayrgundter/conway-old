
import { representation_relationship_with_transformation } from "./index"
import { mechanism } from "./index"
import { cartesian_transformation_operator_3d } from "./index"
import { kinematic_link_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/mechanism_base_placement.htm */
export  class mechanism_base_placement extends representation_relationship_with_transformation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MECHANISM_BASE_PLACEMENT
  }
  private base_of_mechanism_? : mechanism
  private SELF\representation_relationship_with_transformation.transformation_operator_? : cartesian_transformation_operator_3d

  public get base_of_mechanism() : mechanism {
    if ( this.base_of_mechanism_ === void 0 ) {
      this.base_of_mechanism_ = this.extractElement( 5, false, mechanism )
    }

    return this.base_of_mechanism_ as mechanism
  }

  public get SELF\representation_relationship_with_transformation.transformation_operator() : cartesian_transformation_operator_3d {
    if ( this.SELF\representation_relationship_with_transformation.transformation_operator_ === void 0 ) {
      this.SELF\representation_relationship_with_transformation.transformation_operator_ = this.extractElement( 6, false, cartesian_transformation_operator_3d )
    }

    return this.SELF\representation_relationship_with_transformation.transformation_operator_ as cartesian_transformation_operator_3d
  }

  public get rep_2() : kinematic_link_representation {
    return representation_of_link(this?.base_of_mechanism?.base);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MECHANISM_BASE_PLACEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MECHANISM_BASE_PLACEMENT
}
