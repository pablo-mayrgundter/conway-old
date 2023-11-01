
import { literal_number } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/real_literal.htm */
export  class real_literal extends literal_number {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REAL_LITERAL
  }
  private SELF\literal_number.the_value_? : number

  public get SELF\literal_number.the_value() : number {
    if ( this.SELF\literal_number.the_value_ === void 0 ) {
      this.SELF\literal_number.the_value_ = this.extractNumber( 1, false )
    }

    return this.SELF\literal_number.the_value_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REAL_LITERAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REAL_LITERAL
}
