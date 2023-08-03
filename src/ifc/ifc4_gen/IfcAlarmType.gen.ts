
import { IfcDistributionControlElementType } from "./index"
import { IfcAlarmTypeEnum, IfcAlarmTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcalarmtype.htm */
export  class IfcAlarmType extends IfcDistributionControlElementType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCALARMTYPE
  }
  private PredefinedType_? : IfcAlarmTypeEnum

  public get PredefinedType() : IfcAlarmTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcAlarmTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcAlarmTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCALARMTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCALARMTYPE
}