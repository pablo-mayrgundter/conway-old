
import { uncertainty_qualifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/standard_uncertainty.htm */
export  class standard_uncertainty extends uncertainty_qualifier {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.STANDARD_UNCERTAINTY
  }
  private uncertainty_value_? : number

  public get uncertainty_value() : number {
    if ( this.uncertainty_value_ === void 0 ) {
      this.uncertainty_value_ = this.extractNumber( 2, false )
    }

    return this.uncertainty_value_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.STANDARD_UNCERTAINTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.STANDARD_UNCERTAINTY
}
