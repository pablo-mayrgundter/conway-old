
import { IfcBuildingElement } from "./index"
import { IfcCoveringTypeEnum, IfcCoveringTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccovering.htm */
export  class IfcCovering extends IfcBuildingElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOVERING
  }
  private PredefinedType_? : IfcCoveringTypeEnum | null

  public get PredefinedType() : IfcCoveringTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 8, IfcCoveringTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcCoveringTypeEnum | null
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOVERING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOVERING
}
