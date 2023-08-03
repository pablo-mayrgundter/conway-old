
import { IfcFlowControllerType } from "./index"
import { IfcAirTerminalBoxTypeEnum, IfcAirTerminalBoxTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcairterminalboxtype.htm */
export  class IfcAirTerminalBoxType extends IfcFlowControllerType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCAIRTERMINALBOXTYPE
  }
  private PredefinedType_? : IfcAirTerminalBoxTypeEnum

  public get PredefinedType() : IfcAirTerminalBoxTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcAirTerminalBoxTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcAirTerminalBoxTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCAIRTERMINALBOXTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCAIRTERMINALBOXTYPE
}