
import { dimensional_location } from "./index"
import { dimensional_size } from "./index"
import { shape_dimension_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimensional_characteristic_representation.htm */
export  class dimensional_characteristic_representation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION
  }
  private dimension_? : dimensional_location | dimensional_size
  private representation_? : shape_dimension_representation

  public get dimension() : dimensional_location | dimensional_size {
    if ( this.dimension_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSIONAL_CHARACTERISTIC_REPRESENTATION
}
