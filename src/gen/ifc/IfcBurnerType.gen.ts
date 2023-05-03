
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcBurnerTypeEnum, IfcBurnerTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcburnertype.htm */
export  class IfcBurnerType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBURNERTYPE
  }
  private PredefinedType_? : IfcBurnerTypeEnum

  public get PredefinedType() : IfcBurnerTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcBurnerTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcBurnerTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBURNERTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBURNERTYPE
}
