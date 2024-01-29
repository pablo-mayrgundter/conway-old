
import { generic_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class unary_generic_expression extends generic_expression {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.UNARY_GENERIC_EXPRESSION
  }
  private operand_? : generic_expression

  public get operand() : generic_expression {
    if ( this.operand_ === void 0 ) {
      this.operand_ = this.extractElement( 0, false, generic_expression )
    }

    return this.operand_ as generic_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesAP214[] = 
    [  ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.UNARY_GENERIC_EXPRESSION
}
