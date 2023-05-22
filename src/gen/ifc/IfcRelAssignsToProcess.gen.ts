
import { IfcRelAssigns } from "./index"
import { IfcProcess } from "./index"
import { IfcTypeProcess } from "./index"
import { IfcMeasureWithUnit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstoprocess.htm */
export  class IfcRelAssignsToProcess extends IfcRelAssigns {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSIGNSTOPROCESS
  }
  private RelatingProcess_? : IfcProcess | IfcTypeProcess
  private QuantityInProcess_? : IfcMeasureWithUnit | null

  public get RelatingProcess() : IfcProcess | IfcTypeProcess {
    if ( this.RelatingProcess_ === void 0 ) {
      this.RelatingProcess_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcProcess ) && !( value instanceof IfcTypeProcess ) ) {
        return ( void 0 )
      }
      return value as (IfcProcess | IfcTypeProcess)
}, false )
    }

    return this.RelatingProcess_ as IfcProcess | IfcTypeProcess
  }

  public get QuantityInProcess() : IfcMeasureWithUnit | null {
    if ( this.QuantityInProcess_ === void 0 ) {
      this.QuantityInProcess_ = this.extractElement( 7, true, IfcMeasureWithUnit )
    }

    return this.QuantityInProcess_ as IfcMeasureWithUnit | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSIGNSTOPROCESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSIGNSTOPROCESS
}
