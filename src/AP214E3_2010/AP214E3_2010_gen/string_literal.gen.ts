
import { simple_string_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/string_literal.htm */
export  class string_literal extends simple_string_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.STRING_LITERAL
  }
  private the_value_? : string

  public get the_value() : string {
    if ( this.the_value_ === void 0 ) {
      this.the_value_ = this.extractString( 0, false )
    }

    return this.the_value_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.STRING_LITERAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.STRING_LITERAL
}
