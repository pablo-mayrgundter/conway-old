
import { kinematic_pair } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/planar_curve_pair.htm */
export  class planar_curve_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLANAR_CURVE_PAIR
  }
  private curve_1_? : curve
  private curve_2_? : curve
  private orientation_? : boolean

  public get curve_1() : curve {
    if ( this.curve_1_ === void 0 ) {
      this.curve_1_ = this.extractElement( 5, false, curve )
    }

    return this.curve_1_ as curve
  }

  public get curve_2() : curve {
    if ( this.curve_2_ === void 0 ) {
      this.curve_2_ = this.extractElement( 6, false, curve )
    }

    return this.curve_2_ as curve
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
    [ EntityTypesIfc.PLANAR_CURVE_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLANAR_CURVE_PAIR
}
