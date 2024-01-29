
import { dimensional_location } from "./index"
import { dimensional_size } from "./index"
import { shape_dimension_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class dimensional_characteristic_representation extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION
  }
  private dimension_? : dimensional_location | dimensional_size
  private representation_? : shape_dimension_representation

  public get dimension() : dimensional_location | dimensional_size {
    if ( this.dimension_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 0, false )

      if ( !( value instanceof dimensional_location ) && !( value instanceof dimensional_size ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.dimension_ = value as (dimensional_location | dimensional_size)

    }

    return this.dimension_ as dimensional_location | dimensional_size
  }

  public get representation() : shape_dimension_representation {
    if ( this.representation_ === void 0 ) {
      this.representation_ = this.extractElement( 1, false, shape_dimension_representation )
    }

    return this.representation_ as shape_dimension_representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION
}
