
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcElectricGeneratorTypeEnum, IfcElectricGeneratorTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelectricgeneratortype.htm */
export  class IfcElectricGeneratorType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCELECTRICGENERATORTYPE
  }
  private PredefinedType_? : IfcElectricGeneratorTypeEnum

  public get PredefinedType() : IfcElectricGeneratorTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcElectricGeneratorTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcElectricGeneratorTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCELECTRICGENERATORTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCELECTRICGENERATORTYPE
}
