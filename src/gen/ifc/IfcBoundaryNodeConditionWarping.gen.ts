
import { IfcBoundaryNodeCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcWarpingMomentMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundarynodeconditionwarping.htm */
export  class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING
  }
  private WarpingStiffness_? : IfcBoolean | IfcWarpingMomentMeasure | null

  public get WarpingStiffness() : IfcBoolean | IfcWarpingMomentMeasure | null {
    if ( this.WarpingStiffness_ === void 0 ) {
      this.WarpingStiffness_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcWarpingMomentMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcBoolean | IfcWarpingMomentMeasure)
}, true )
    }

    return this.WarpingStiffness_ as IfcBoolean | IfcWarpingMomentMeasure | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOUNDARYNODECONDITIONWARPING
}
