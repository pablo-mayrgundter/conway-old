
import { IfcFurnishingElement } from "./index"
import { IfcSystemFurnitureElementTypeEnum, IfcSystemFurnitureElementTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsystemfurnitureelement.htm */
export  class IfcSystemFurnitureElement extends IfcFurnishingElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT
  }
  private PredefinedType_? : IfcSystemFurnitureElementTypeEnum | null

  public get PredefinedType() : IfcSystemFurnitureElementTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 8, IfcSystemFurnitureElementTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcSystemFurnitureElementTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSYSTEMFURNITUREELEMENT
}
