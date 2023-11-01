
import { geometric_representation_item } from "./index"
import { positive_length_measure } from "./index"
import { point } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/sphere.htm */
export  class sphere extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SPHERE
  }
  private radius_? : number
  private centre_? : point

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 1, false )
    }

    return this.radius_ as number
  }

  public get centre() : point {
    if ( this.centre_ === void 0 ) {
      this.centre_ = this.extractElement( 2, false, point )
    }

    return this.centre_ as point
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SPHERE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SPHERE
}
