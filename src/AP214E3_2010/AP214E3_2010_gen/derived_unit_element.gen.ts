
import { named_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/derived_unit_element.htm */
export  class derived_unit_element extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DERIVED_UNIT_ELEMENT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DERIVED_UNIT_ELEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DERIVED_UNIT_ELEMENT
}
