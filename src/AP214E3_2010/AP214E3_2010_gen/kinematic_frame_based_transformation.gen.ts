
import { geometric_representation_item } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class kinematic_frame_based_transformation extends geometric_representation_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.KINEMATIC_FRAME_BASED_TRANSFORMATION
  }
  private transformator_? : axis2_placement_3d

  public get transformator() : axis2_placement_3d {
    if ( this.transformator_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 1, false )

      if ( !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.transformator_ = value as (axis2_placement_3d)

    }

    return this.transformator_ as axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.KINEMATIC_FRAME_BASED_TRANSFORMATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.KINEMATIC_FRAME_BASED_TRANSFORMATION
}
