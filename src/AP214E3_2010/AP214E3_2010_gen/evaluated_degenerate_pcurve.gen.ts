
import { degenerate_pcurve } from "./index"
import { cartesian_point } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/evaluated_degenerate_pcurve.htm */
export  class evaluated_degenerate_pcurve extends degenerate_pcurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EVALUATED_DEGENERATE_PCURVE
  }
  private equivalent_point_? : cartesian_point

  public get equivalent_point() : cartesian_point {
    if ( this.equivalent_point_ === void 0 ) {
      this.equivalent_point_ = this.extractElement( 3, false, cartesian_point )
    }

    return this.equivalent_point_ as cartesian_point
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EVALUATED_DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EVALUATED_DEGENERATE_PCURVE
}
