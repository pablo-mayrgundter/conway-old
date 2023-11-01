
import { tolerance_zone_definition } from "./index"
import { shape_aspect } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/projected_zone_definition.htm */
export  class projected_zone_definition extends tolerance_zone_definition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PROJECTED_ZONE_DEFINITION
  }
  private projection_end_? : shape_aspect
  private projected_length_? : measure_with_unit

  public get projection_end() : shape_aspect {
    if ( this.projection_end_ === void 0 ) {
      this.projection_end_ = this.extractElement( 2, false, shape_aspect )
    }

    return this.projection_end_ as shape_aspect
  }

  public get projected_length() : measure_with_unit {
    if ( this.projected_length_ === void 0 ) {
      this.projected_length_ = this.extractElement( 3, false, measure_with_unit )
    }

    return this.projected_length_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PROJECTED_ZONE_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PROJECTED_ZONE_DEFINITION
}
