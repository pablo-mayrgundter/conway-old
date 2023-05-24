
import { IfcElementComponent } from "./index"
import { IfcBuildingElementPartTypeEnum, IfcBuildingElementPartTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuildingelementpart.htm */
export  class IfcBuildingElementPart extends IfcElementComponent {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBUILDINGELEMENTPART
  }
  private PredefinedType_? : IfcBuildingElementPartTypeEnum | null

  public get PredefinedType() : IfcBuildingElementPartTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 8, IfcBuildingElementPartTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcBuildingElementPartTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBUILDINGELEMENTPART ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBUILDINGELEMENTPART
}
