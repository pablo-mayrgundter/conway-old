
import { simple_numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/literal_number.htm */
export abstract class literal_number extends simple_numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LITERAL_NUMBER
  }
  private the_value_? : number

  public get the_value() : number {
    if ( this.the_value_ === void 0 ) {
      this.the_value_ = this.extractNumber( 0, false )
    }

    return this.the_value_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.INT_LITERAL, EntityTypesIfc.REAL_LITERAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LITERAL_NUMBER
}
