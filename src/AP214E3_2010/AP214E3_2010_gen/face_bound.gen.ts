
import { topological_representation_item } from "./index"
import { loop } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/face_bound.htm */
export  class face_bound extends topological_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FACE_BOUND
  }
  private bound_? : loop
  private orientation_? : boolean

  public get bound() : loop {
    if ( this.bound_ === void 0 ) {
      this.bound_ = this.extractElement( 1, false, loop )
    }

    return this.bound_ as loop
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 2, false )
    }

    return this.orientation_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FACE_BOUND ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FACE_BOUND
}
