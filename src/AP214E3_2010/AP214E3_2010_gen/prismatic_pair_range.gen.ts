
import { simple_pair_range } from "./index"
import { prismatic_pair } from "./index"
import { length_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/prismatic_pair_range.htm */
export  class prismatic_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRISMATIC_PAIR_RANGE
  }
  private lower_limit_actual_translation_? : length_measure | unlimited_range
  private upper_limit_actual_translation_? : length_measure | unlimited_range


  public get lower_limit_actual_translation() : length_measure | unlimited_range {
    if ( this.lower_limit_actual_translation_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 2, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 2, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_translation_ = value as (length_measure | unlimited_range)

    }

    return this.lower_limit_actual_translation_ as length_measure | unlimited_range
  }

  public get upper_limit_actual_translation() : length_measure | unlimited_range {
    if ( this.upper_limit_actual_translation_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 3, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 3, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_translation_ = value as (length_measure | unlimited_range)

    }

    return this.upper_limit_actual_translation_ as length_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRISMATIC_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRISMATIC_PAIR_RANGE
}
