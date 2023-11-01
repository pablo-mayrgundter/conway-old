
import { dimensional_location } from "./index"
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimensional_location_with_path.htm */
export  class dimensional_location_with_path extends dimensional_location {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSIONAL_LOCATION_WITH_PATH
  }
  private path_? : shape_aspect

  public get path() : shape_aspect {
    if ( this.path_ === void 0 ) {
      this.path_ = this.extractElement( 4, false, shape_aspect )
    }

    return this.path_ as shape_aspect
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSIONAL_LOCATION_WITH_PATH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSIONAL_LOCATION_WITH_PATH
}
