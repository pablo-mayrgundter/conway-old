
import { IfcElementComponentType } from "./index"
import { IfcBuildingElementPartTypeEnum, IfcBuildingElementPartTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuildingelementparttype.htm */
export  class IfcBuildingElementPartType extends IfcElementComponentType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE
  }
  private PredefinedType_? : IfcBuildingElementPartTypeEnum

  public get PredefinedType() : IfcBuildingElementPartTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcBuildingElementPartTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcBuildingElementPartTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBUILDINGELEMENTPARTTYPE
}
