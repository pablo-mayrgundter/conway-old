
import { presentation_set } from "./index"
import { identifier } from "./index"
import { drawing_definition } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/drawing_revision.htm */
export  class drawing_revision extends presentation_set {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAWING_REVISION
  }
  private revision_identifier_? : string
  private drawing_identifier_? : drawing_definition
  private intended_scale_? : string | null

  public get revision_identifier() : string {
    if ( this.revision_identifier_ === void 0 ) {
      this.revision_identifier_ = this.extractString( 0, false )
    }

    return this.revision_identifier_ as string
  }

  public get drawing_identifier() : drawing_definition {
    if ( this.drawing_identifier_ === void 0 ) {
      this.drawing_identifier_ = this.extractElement( 1, false, drawing_definition )
    }

    return this.drawing_identifier_ as drawing_definition
  }

  public get intended_scale() : string | null {
    if ( this.intended_scale_ === void 0 ) {
      this.intended_scale_ = this.extractString( 2, true )
    }

    return this.intended_scale_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAWING_REVISION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAWING_REVISION
}
