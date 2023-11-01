
import { simple_boolean_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/boolean_literal.htm */
export  class boolean_literal extends simple_boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOOLEAN_LITERAL
  }
  private the_value_? : boolean

  public get the_value() : boolean {
    if ( this.the_value_ === void 0 ) {
      this.the_value_ = this.extractBoolean( 0, false )
    }

    return this.the_value_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BOOLEAN_LITERAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOOLEAN_LITERAL
}
