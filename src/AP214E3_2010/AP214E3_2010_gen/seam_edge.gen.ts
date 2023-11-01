
import { oriented_edge } from "./index"
import { pcurve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/seam_edge.htm */
export  class seam_edge extends oriented_edge {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SEAM_EDGE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SEAM_EDGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SEAM_EDGE
}
