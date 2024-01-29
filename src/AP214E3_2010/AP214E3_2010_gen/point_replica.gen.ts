
import { point } from "./index"
import { cartesian_transformation_operator } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class point_replica extends point {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.POINT_REPLICA
  }
  private parent_pt_? : point
  private transformation_? : cartesian_transformation_operator

  public get parent_pt() : point {
    if ( this.parent_pt_ === void 0 ) {
      this.parent_pt_ = this.extractElement( 1, false, point )
    }

    return this.parent_pt_ as point
  }

  public get transformation() : cartesian_transformation_operator {
    if ( this.transformation_ === void 0 ) {
      this.transformation_ = this.extractElement( 2, false, cartesian_transformation_operator )
    }

    return this.transformation_ as cartesian_transformation_operator
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.POINT_REPLICA ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.POINT_REPLICA
}
