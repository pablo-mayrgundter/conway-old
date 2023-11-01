
import { generic_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/unary_generic_expression.htm */
export abstract class unary_generic_expression extends generic_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNARY_GENERIC_EXPRESSION
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNARY_GENERIC_EXPRESSION
}
