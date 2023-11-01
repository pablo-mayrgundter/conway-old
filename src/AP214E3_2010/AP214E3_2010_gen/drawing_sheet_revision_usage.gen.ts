
import { area_in_set } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/drawing_sheet_revision_usage.htm */
export  class drawing_sheet_revision_usage extends area_in_set {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAWING_SHEET_REVISION_USAGE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAWING_SHEET_REVISION_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAWING_SHEET_REVISION_USAGE
}
