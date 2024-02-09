
import { named_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class derived_unit_element extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DERIVED_UNIT_ELEMENT
  }
  private unit_? : named_unit
  private exponent_? : number

  public get unit() : named_unit {
    if ( this.unit_ === void 0 ) {
      this.unit_ = this.extractElement( 0, false, named_unit )
    }

    return this.unit_ as named_unit
  }

  public get exponent() : number {
    if ( this.exponent_ === void 0 ) {
      this.exponent_ = this.extractNumber( 1, false )
    }

    return this.exponent_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DERIVED_UNIT_ELEMENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DERIVED_UNIT_ELEMENT
}
