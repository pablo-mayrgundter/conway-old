
import { IfcFlowControllerType } from "./index"
import { IfcElectricTimeControlTypeEnum, IfcElectricTimeControlTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelectrictimecontroltype.htm */
export  class IfcElectricTimeControlType extends IfcFlowControllerType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE
  }
  private PredefinedType_? : IfcElectricTimeControlTypeEnum

  public get PredefinedType() : IfcElectricTimeControlTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcElectricTimeControlTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcElectricTimeControlTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE
}
