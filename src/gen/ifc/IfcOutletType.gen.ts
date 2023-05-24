
import { IfcFlowTerminalType } from "./index"
import { IfcOutletTypeEnum, IfcOutletTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcoutlettype.htm */
export  class IfcOutletType extends IfcFlowTerminalType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCOUTLETTYPE
  }
  private PredefinedType_? : IfcOutletTypeEnum

  public get PredefinedType() : IfcOutletTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcOutletTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcOutletTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCOUTLETTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCOUTLETTYPE
}
