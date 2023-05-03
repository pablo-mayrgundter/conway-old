
import { IfcFlowMovingDeviceType } from "./index"
import { IfcCompressorTypeEnum, IfcCompressorTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompressortype.htm */
export  class IfcCompressorType extends IfcFlowMovingDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPRESSORTYPE
  }
  private PredefinedType_? : IfcCompressorTypeEnum

  public get PredefinedType() : IfcCompressorTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcCompressorTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcCompressorTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMPRESSORTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPRESSORTYPE
}
