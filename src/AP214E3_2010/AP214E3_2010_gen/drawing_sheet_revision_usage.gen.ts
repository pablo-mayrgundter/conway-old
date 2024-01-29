
import { area_in_set } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class drawing_sheet_revision_usage extends area_in_set {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DRAWING_SHEET_REVISION_USAGE
  }
  private sheet_number_? : string

  public get sheet_number() : string {
    if ( this.sheet_number_ === void 0 ) {
      this.sheet_number_ = this.extractString( 2, false )
    }

    return this.sheet_number_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DRAWING_SHEET_REVISION_USAGE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DRAWING_SHEET_REVISION_USAGE
}
