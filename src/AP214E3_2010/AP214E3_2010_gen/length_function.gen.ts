
import { numeric_expression } from "./index"
import { string_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/length_function.htm */
export  class length_function extends numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LENGTH_FUNCTION
  }
  private operand_? : string_expression

  public get operand() : string_expression {
    if ( this.operand_ === void 0 ) {
      this.operand_ = this.extractElement( 0, false, string_expression )
    }

    return this.operand_ as string_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LENGTH_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LENGTH_FUNCTION
}
