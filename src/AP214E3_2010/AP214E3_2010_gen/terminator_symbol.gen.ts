
import { annotation_symbol_occurrence } from "./index"
import { annotation_curve_occurrence } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/terminator_symbol.htm */
export  class terminator_symbol extends annotation_symbol_occurrence {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TERMINATOR_SYMBOL
  }
  private annotated_curve_? : annotation_curve_occurrence

  public get annotated_curve() : annotation_curve_occurrence {
    if ( this.annotated_curve_ === void 0 ) {
      this.annotated_curve_ = this.extractElement( 4, false, annotation_curve_occurrence )
    }

    return this.annotated_curve_ as annotation_curve_occurrence
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TERMINATOR_SYMBOL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TERMINATOR_SYMBOL
}
