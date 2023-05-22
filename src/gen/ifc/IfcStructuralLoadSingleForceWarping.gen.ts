
import { IfcStructuralLoadSingleForce } from "./index"
import { IfcWarpingMomentMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadsingleforcewarping.htm */
export  class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCEWARPING
  }
  private WarpingMoment_? : number | null

  public get WarpingMoment() : number | null {
    if ( this.WarpingMoment_ === void 0 ) {
      this.WarpingMoment_ = this.extractNumber( 7, true )
    }

    return this.WarpingMoment_ as number | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCEWARPING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSTRUCTURALLOADSINGLEFORCEWARPING
}
