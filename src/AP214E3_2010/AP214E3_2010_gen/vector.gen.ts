
import { geometric_representation_item } from "./index"
import { direction } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/vector.htm */
export  class vector extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VECTOR
  }
  private orientation_? : direction
  private magnitude_? : number

  public get orientation() : direction {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractElement( 1, false, direction )
    }

    return this.orientation_ as direction
  }

  public get magnitude() : number {
    if ( this.magnitude_ === void 0 ) {
      this.magnitude_ = this.extractNumber( 2, false )
    }

    return this.magnitude_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VECTOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VECTOR
}
