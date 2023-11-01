
import { placement } from "./index"
import { direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/axis2_placement_3d.htm */
export  class axis2_placement_3d extends placement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.AXIS2_PLACEMENT_3D
  }
  private axis_? : direction | null
  private ref_direction_? : direction | null

  public get axis() : direction | null {
    if ( this.axis_ === void 0 ) {
      this.axis_ = this.extractElement( 2, true, direction )
    }

    return this.axis_ as direction | null
  }

  public get ref_direction() : direction | null {
    if ( this.ref_direction_ === void 0 ) {
      this.ref_direction_ = this.extractElement( 3, true, direction )
    }

    return this.ref_direction_ as direction | null
  }

  public get p() : Array<direction> {
    return build_axes(this?.axis,this?.ref_direction);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.AXIS2_PLACEMENT_3D ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.AXIS2_PLACEMENT_3D
}
