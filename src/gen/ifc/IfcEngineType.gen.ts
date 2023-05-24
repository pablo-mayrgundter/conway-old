
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcEngineTypeEnum, IfcEngineTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcenginetype.htm */
export  class IfcEngineType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCENGINETYPE
  }
  private PredefinedType_? : IfcEngineTypeEnum

  public get PredefinedType() : IfcEngineTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcEngineTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcEngineTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCENGINETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCENGINETYPE
}
