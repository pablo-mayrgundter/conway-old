
import { founded_item } from "./index"
import { approximation_tolerance_deviation } from "./index"
import { approximation_tolerance_parameter } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approximation_tolerance.htm */
export  class approximation_tolerance extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROXIMATION_TOLERANCE
  }
  private tolerance_? : approximation_tolerance_deviation | approximation_tolerance_parameter

  public get tolerance() : approximation_tolerance_deviation | approximation_tolerance_parameter {
    if ( this.tolerance_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof approximation_tolerance_deviation ) && !( value instanceof approximation_tolerance_parameter ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.tolerance_ = value as (approximation_tolerance_deviation | approximation_tolerance_parameter)

    }

    return this.tolerance_ as approximation_tolerance_deviation | approximation_tolerance_parameter
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROXIMATION_TOLERANCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROXIMATION_TOLERANCE
}
