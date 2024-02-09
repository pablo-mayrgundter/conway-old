
import { oriented_edge } from "./index"
import { pcurve } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class seam_edge extends oriented_edge {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SEAM_EDGE
  }
  private pcurve_reference_? : pcurve

  public get pcurve_reference() : pcurve {
    if ( this.pcurve_reference_ === void 0 ) {
      this.pcurve_reference_ = this.extractElement( 5, false, pcurve )
    }

    return this.pcurve_reference_ as pcurve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SEAM_EDGE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SEAM_EDGE
}
