
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcMotorConnectionTypeEnum, IfcMotorConnectionTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmotorconnectiontype.htm */
export  class IfcMotorConnectionType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMOTORCONNECTIONTYPE
  }
  private PredefinedType_? : IfcMotorConnectionTypeEnum

  public get PredefinedType() : IfcMotorConnectionTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcMotorConnectionTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcMotorConnectionTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMOTORCONNECTIONTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMOTORCONNECTIONTYPE
}
