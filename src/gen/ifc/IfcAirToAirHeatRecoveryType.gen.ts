
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcAirToAirHeatRecoveryTypeEnum, IfcAirToAirHeatRecoveryTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcairtoairheatrecoverytype.htm */
export  class IfcAirToAirHeatRecoveryType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE
  }
  private PredefinedType_? : IfcAirToAirHeatRecoveryTypeEnum

  public get PredefinedType() : IfcAirToAirHeatRecoveryTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcAirToAirHeatRecoveryTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcAirToAirHeatRecoveryTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE
}
