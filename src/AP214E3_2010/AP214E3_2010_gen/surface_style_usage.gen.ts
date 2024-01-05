
import { founded_item } from "./index"
import { surface_side, surface_sideDeserializeStep } from "./index"
import { surface_side_style } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_usage.htm */
export  class surface_style_usage extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_USAGE
  }
  private side_? : surface_side
  private style_? : surface_side_style

  public get side() : surface_side {
    if ( this.side_ === void 0 ) {
      this.side_ = this.extractLambda( 0, surface_sideDeserializeStep, false )
    }

    return this.side_ as surface_side
  }

  public get style() : surface_side_style {
    if ( this.style_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof surface_side_style ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.style_ = value as (surface_side_style)

    }

    return this.style_ as surface_side_style
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_USAGE
}
