
import { mapped_item } from "./index"
import { text_alignment } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_text_character.htm */
export  class annotation_text_character extends mapped_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_TEXT_CHARACTER
  }
  private alignment_? : string

  public get alignment() : string {
    if ( this.alignment_ === void 0 ) {
      this.alignment_ = this.extractString( 3, false )
    }

    return this.alignment_ as string
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_TEXT_CHARACTER ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_TEXT_CHARACTER
}