
import { kinematic_pair } from "./index"
import { surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_pair.htm */
export  class surface_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_PAIR
  }
  private surface_1_? : surface
  private surface_2_? : surface
  private orientation_? : boolean

  public get surface_1() : surface {
    if ( this.surface_1_ === void 0 ) {
      this.surface_1_ = this.extractElement( 5, false, surface )
    }

    return this.surface_1_ as surface
  }

  public get surface_2() : surface {
    if ( this.surface_2_ === void 0 ) {
      this.surface_2_ = this.extractElement( 6, false, surface )
    }

    return this.surface_2_ as surface
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 7, false )
    }

    return this.orientation_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_PAIR
}
