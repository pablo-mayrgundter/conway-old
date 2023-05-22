
import { IfcCurve } from "./index"
import { IfcSurface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpcurve.htm */
export  class IfcPcurve extends IfcCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPCURVE
  }
  private BasisSurface_? : IfcSurface
  private ReferenceCurve_? : IfcCurve

  public get BasisSurface() : IfcSurface {
    if ( this.BasisSurface_ === void 0 ) {
      this.BasisSurface_ = this.extractElement( 0, false, IfcSurface )
    }

    return this.BasisSurface_ as IfcSurface
  }

  public get ReferenceCurve() : IfcCurve {
    if ( this.ReferenceCurve_ === void 0 ) {
      this.ReferenceCurve_ = this.extractElement( 1, false, IfcCurve )
    }

    return this.ReferenceCurve_ as IfcCurve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPCURVE
}
