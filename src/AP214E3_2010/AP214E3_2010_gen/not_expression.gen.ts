
import { unary_boolean_expression } from "./index"
import { boolean_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/not_expression.htm */
export  class not_expression extends unary_boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NOT_EXPRESSION
  }
  private operand_? : boolean_expression

  public get operand() : boolean_expression {
    if ( this.operand_ === void 0 ) {
      this.operand_ = this.extractElement( 0, false, boolean_expression )
    }

    return this.operand_ as boolean_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NOT_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NOT_EXPRESSION
}
