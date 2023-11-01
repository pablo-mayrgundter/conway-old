
import { tolerance_value } from "./index"
import { limits_and_fits } from "./index"
import { dimensional_location } from "./index"
import { dimensional_size } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/plus_minus_tolerance.htm */
export  class plus_minus_tolerance extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLUS_MINUS_TOLERANCE
  }
  private range_? : tolerance_value | limits_and_fits
  private toleranced_dimension_? : dimensional_location | dimensional_size

  public get range() : tolerance_value | limits_and_fits {
    if ( this.range_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof tolerance_value ) && !( value instanceof limits_and_fits ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.range_ = value as (tolerance_value | limits_and_fits)

    }

    return this.range_ as tolerance_value | limits_and_fits
  }

  public get toleranced_dimension() : dimensional_location | dimensional_size {
    if ( this.toleranced_dimension_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof dimensional_location ) && !( value instanceof dimensional_size ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.toleranced_dimension_ = value as (dimensional_location | dimensional_size)

    }

    return this.toleranced_dimension_ as dimensional_location | dimensional_size
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLUS_MINUS_TOLERANCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLUS_MINUS_TOLERANCE
}
