
import { composite_text } from "./index"
import { planar_extent } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class composite_text_with_extent extends composite_text {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.COMPOSITE_TEXT_WITH_EXTENT
  }
  private extent_? : planar_extent

  public get extent() : planar_extent {
    if ( this.extent_ === void 0 ) {
      this.extent_ = this.extractElement( 2, false, planar_extent )
    }

    return this.extent_ as planar_extent
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.COMPOSITE_TEXT_WITH_EXTENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.COMPOSITE_TEXT_WITH_EXTENT
}
