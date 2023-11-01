
import { uncertainty_qualifier } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/qualitative_uncertainty.htm */
export  class qualitative_uncertainty extends uncertainty_qualifier {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.QUALITATIVE_UNCERTAINTY
  }
  private uncertainty_value_? : string

  public get uncertainty_value() : string {
    if ( this.uncertainty_value_ === void 0 ) {
      this.uncertainty_value_ = this.extractString( 2, false )
    }

    return this.uncertainty_value_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.QUALITATIVE_UNCERTAINTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.QUALITATIVE_UNCERTAINTY
}
