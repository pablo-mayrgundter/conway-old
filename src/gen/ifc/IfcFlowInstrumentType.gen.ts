
import { IfcDistributionControlElementType } from "./index"
import { IfcFlowInstrumentTypeEnum, IfcFlowInstrumentTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcflowinstrumenttype.htm */
export  class IfcFlowInstrumentType extends IfcDistributionControlElementType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFLOWINSTRUMENTTYPE
  }
  private PredefinedType_? : IfcFlowInstrumentTypeEnum

  public get PredefinedType() : IfcFlowInstrumentTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcFlowInstrumentTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcFlowInstrumentTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFLOWINSTRUMENTTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFLOWINSTRUMENTTYPE
}
