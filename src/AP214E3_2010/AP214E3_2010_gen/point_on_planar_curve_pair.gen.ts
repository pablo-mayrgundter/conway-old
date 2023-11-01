
import { kinematic_pair } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_on_planar_curve_pair.htm */
export  class point_on_planar_curve_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_ON_PLANAR_CURVE_PAIR
  }
  private pair_curve_? : curve
  private orientation_? : boolean

  public get pair_curve() : curve {
    if ( this.pair_curve_ === void 0 ) {
      this.pair_curve_ = this.extractElement( 5, false, curve )
    }

    return this.pair_curve_ as curve
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 6, false )
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
    [ EntityTypesIfc.POINT_ON_PLANAR_CURVE_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_ON_PLANAR_CURVE_PAIR
}
