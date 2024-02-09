
import { planar_extent } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class planar_box extends planar_extent {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PLANAR_BOX
  }
  private placement_? : axis2_placement_2d | axis2_placement_3d

  public get placement() : axis2_placement_2d | axis2_placement_3d {
    if ( this.placement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 3, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.placement_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.placement_ as axis2_placement_2d | axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PLANAR_BOX ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PLANAR_BOX
}
