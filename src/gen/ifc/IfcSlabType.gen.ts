
import { IfcBuildingElementType } from "./index"
import { IfcSlabTypeEnum, IfcSlabTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcslabtype.htm */
export  class IfcSlabType extends IfcBuildingElementType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSLABTYPE
  }
  private PredefinedType_? : IfcSlabTypeEnum

  public get PredefinedType() : IfcSlabTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcSlabTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcSlabTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSLABTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSLABTYPE
}
