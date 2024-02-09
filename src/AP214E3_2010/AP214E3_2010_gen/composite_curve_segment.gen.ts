
import { founded_item } from "./index"
import { transition_code, transition_codeDeserializeStep } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class composite_curve_segment extends founded_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.COMPOSITE_CURVE_SEGMENT
  }
  private transition_? : transition_code
  private same_sense_? : boolean
  private parent_curve_? : curve

  public get transition() : transition_code {
    if ( this.transition_ === void 0 ) {
      this.transition_ = this.extractLambda( 0, transition_codeDeserializeStep, false )
    }

    return this.transition_ as transition_code
  }

  public get same_sense() : boolean {
    if ( this.same_sense_ === void 0 ) {
      this.same_sense_ = this.extractBoolean( 1, false )
    }

    return this.same_sense_ as boolean
  }

  public get parent_curve() : curve {
    if ( this.parent_curve_ === void 0 ) {
      this.parent_curve_ = this.extractElement( 2, false, curve )
    }

    return this.parent_curve_ as curve
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.COMPOSITE_CURVE_SEGMENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.COMPOSITE_CURVE_SEGMENT
}
