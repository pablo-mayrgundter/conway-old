
import { IfcFlowTerminalType } from "./index"
import { IfcCommunicationsApplianceTypeEnum, IfcCommunicationsApplianceTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccommunicationsappliancetype.htm */
export  class IfcCommunicationsApplianceType extends IfcFlowTerminalType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE
  }
  private PredefinedType_? : IfcCommunicationsApplianceTypeEnum

  public get PredefinedType() : IfcCommunicationsApplianceTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcCommunicationsApplianceTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcCommunicationsApplianceTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE
}
