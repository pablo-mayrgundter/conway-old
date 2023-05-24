
import { IfcConstructionResource } from "./index"
import { IfcConstructionMaterialResourceTypeEnum, IfcConstructionMaterialResourceTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionmaterialresource.htm */
export  class IfcConstructionMaterialResource extends IfcConstructionResource {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE
  }
  private PredefinedType_? : IfcConstructionMaterialResourceTypeEnum | null

  public get PredefinedType() : IfcConstructionMaterialResourceTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 10, IfcConstructionMaterialResourceTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcConstructionMaterialResourceTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE
}
