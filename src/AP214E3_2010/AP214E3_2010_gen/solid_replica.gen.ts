
import { solid_model } from "./index"
import { cartesian_transformation_operator_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class solid_replica extends solid_model {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SOLID_REPLICA
  }
  private parent_solid_? : solid_model
  private transformation_? : cartesian_transformation_operator_3d

  public get parent_solid() : solid_model {
    if ( this.parent_solid_ === void 0 ) {
      this.parent_solid_ = this.extractElement( 1, false, solid_model )
    }

    return this.parent_solid_ as solid_model
  }

  public get transformation() : cartesian_transformation_operator_3d {
    if ( this.transformation_ === void 0 ) {
      this.transformation_ = this.extractElement( 2, false, cartesian_transformation_operator_3d )
    }

    return this.transformation_ as cartesian_transformation_operator_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SOLID_REPLICA ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SOLID_REPLICA
}
