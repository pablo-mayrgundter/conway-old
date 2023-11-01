
import { presentation_area } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/drawing_sheet_revision.htm */
export  class drawing_sheet_revision extends presentation_area {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAWING_SHEET_REVISION
  }
  private revision_identifier_? : string

  public get revision_identifier() : string {
    if ( this.revision_identifier_ === void 0 ) {
      this.revision_identifier_ = this.extractString( 4, false )
    }

    return this.revision_identifier_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAWING_SHEET_REVISION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAWING_SHEET_REVISION
}
