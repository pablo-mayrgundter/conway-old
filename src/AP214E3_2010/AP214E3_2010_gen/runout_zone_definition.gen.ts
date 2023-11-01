
import { tolerance_zone_definition } from "./index"
import { runout_zone_orientation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/runout_zone_definition.htm */
export  class runout_zone_definition extends tolerance_zone_definition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RUNOUT_ZONE_DEFINITION
  }
  private orientation_? : runout_zone_orientation

  public get orientation() : runout_zone_orientation {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractElement( 2, false, runout_zone_orientation )
    }

    return this.orientation_ as runout_zone_orientation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RUNOUT_ZONE_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RUNOUT_ZONE_DEFINITION
}
