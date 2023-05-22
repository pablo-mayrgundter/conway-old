
import { IfcConstructionResourceType } from "./index"
import { IfcConstructionEquipmentResourceTypeEnum, IfcConstructionEquipmentResourceTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionequipmentresourcetype.htm */
export  class IfcConstructionEquipmentResourceType extends IfcConstructionResourceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE
  }
  private PredefinedType_? : IfcConstructionEquipmentResourceTypeEnum

  public get PredefinedType() : IfcConstructionEquipmentResourceTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 11, IfcConstructionEquipmentResourceTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcConstructionEquipmentResourceTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE
}
