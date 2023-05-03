
import { IfcFlowTerminalType } from "./index"
import { IfcStackTerminalTypeEnum, IfcStackTerminalTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstackterminaltype.htm */
export  class IfcStackTerminalType extends IfcFlowTerminalType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSTACKTERMINALTYPE
  }
  private PredefinedType_? : IfcStackTerminalTypeEnum

  public get PredefinedType() : IfcStackTerminalTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcStackTerminalTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcStackTerminalTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSTACKTERMINALTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSTACKTERMINALTYPE
}
