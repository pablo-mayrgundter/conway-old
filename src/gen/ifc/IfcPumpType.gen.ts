
import { IfcFlowMovingDeviceType } from "./index"
import { IfcPumpTypeEnum, IfcPumpTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpumptype.htm */
export  class IfcPumpType extends IfcFlowMovingDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPUMPTYPE
  }
  private PredefinedType_? : IfcPumpTypeEnum

  public get PredefinedType() : IfcPumpTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcPumpTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcPumpTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPUMPTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPUMPTYPE
}
