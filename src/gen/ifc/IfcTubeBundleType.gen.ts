
import { IfcEnergyConversionDeviceType } from "./index"
import { IfcTubeBundleTypeEnum, IfcTubeBundleTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctubebundletype.htm */
export  class IfcTubeBundleType extends IfcEnergyConversionDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTUBEBUNDLETYPE
  }
  private PredefinedType_? : IfcTubeBundleTypeEnum

  public get PredefinedType() : IfcTubeBundleTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcTubeBundleTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcTubeBundleTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTUBEBUNDLETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTUBEBUNDLETYPE
}
