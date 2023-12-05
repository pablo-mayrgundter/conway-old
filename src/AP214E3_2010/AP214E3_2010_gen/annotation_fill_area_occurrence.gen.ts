
import { annotation_occurrence } from "./index"
import { point } from "./index"
import { annotation_fill_area } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_fill_area_occurrence.htm */
export  class annotation_fill_area_occurrence extends annotation_occurrence {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_FILL_AREA_OCCURRENCE
  }
  private fill_style_target_? : point
  private item_? : annotation_fill_area

  public get fill_style_target() : point {
    if ( this.fill_style_target_ === void 0 ) {
      this.fill_style_target_ = this.extractElement( 3, false, point )
    }

    return this.fill_style_target_ as point
  }

  public get item() : annotation_fill_area {
    if ( this.item_ === void 0 ) {
      this.item_ = this.extractElement( 4, false, annotation_fill_area )
    }

    return this.item_ as annotation_fill_area
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_FILL_AREA_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_FILL_AREA_OCCURRENCE
}
