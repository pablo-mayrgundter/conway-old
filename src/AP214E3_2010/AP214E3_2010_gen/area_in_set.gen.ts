
import { presentation_area } from "./index"
import { presentation_set } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/area_in_set.htm */
export  class area_in_set extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.AREA_IN_SET
  }
  private area_? : presentation_area
  private in_set_? : presentation_set

  public get area() : presentation_area {
    if ( this.area_ === void 0 ) {
      this.area_ = this.extractElement( 0, false, presentation_area )
    }

    return this.area_ as presentation_area
  }

  public get in_set() : presentation_set {
    if ( this.in_set_ === void 0 ) {
      this.in_set_ = this.extractElement( 1, false, presentation_set )
    }

    return this.in_set_ as presentation_set
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.AREA_IN_SET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.AREA_IN_SET
}
