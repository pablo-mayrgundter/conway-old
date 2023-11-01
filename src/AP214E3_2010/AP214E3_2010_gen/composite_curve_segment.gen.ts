
import { founded_item } from "./index"
import { transition_code, transition_codeDeserializeStep } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/composite_curve_segment.htm */
export  class composite_curve_segment extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPOSITE_CURVE_SEGMENT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPOSITE_CURVE_SEGMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPOSITE_CURVE_SEGMENT
}
