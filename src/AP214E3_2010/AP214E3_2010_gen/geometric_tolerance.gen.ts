
import { label } from "./index"
import { text } from "./index"
import { measure_with_unit } from "./index"
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_tolerance.htm */
export  class geometric_tolerance extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_TOLERANCE
  }
  private name_? : string
  private description_? : string
  private magnitude_? : measure_with_unit
  private toleranced_shape_aspect_? : shape_aspect

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get magnitude() : measure_with_unit {
    if ( this.magnitude_ === void 0 ) {
      this.magnitude_ = this.extractElement( 2, false, measure_with_unit )
    }

    return this.magnitude_ as measure_with_unit
  }

  public get toleranced_shape_aspect() : shape_aspect {
    if ( this.toleranced_shape_aspect_ === void 0 ) {
      this.toleranced_shape_aspect_ = this.extractElement( 3, false, shape_aspect )
    }

    return this.toleranced_shape_aspect_ as shape_aspect
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_TOLERANCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_TOLERANCE
}
