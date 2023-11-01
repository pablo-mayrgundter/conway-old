
import { product_definition_usage } from "./index"
import { text } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/make_from_usage_option.htm */
export  class make_from_usage_option extends product_definition_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MAKE_FROM_USAGE_OPTION
  }
  private ranking_? : number
  private ranking_rationale_? : string
  private quantity_? : measure_with_unit

  public get ranking() : number {
    if ( this.ranking_ === void 0 ) {
      this.ranking_ = this.extractNumber( 5, false )
    }

    return this.ranking_ as number
  }

  public get ranking_rationale() : string {
    if ( this.ranking_rationale_ === void 0 ) {
      this.ranking_rationale_ = this.extractString( 6, false )
    }

    return this.ranking_rationale_ as string
  }

  public get quantity() : measure_with_unit {
    if ( this.quantity_ === void 0 ) {
      this.quantity_ = this.extractElement( 7, false, measure_with_unit )
    }

    return this.quantity_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MAKE_FROM_USAGE_OPTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MAKE_FROM_USAGE_OPTION
}
