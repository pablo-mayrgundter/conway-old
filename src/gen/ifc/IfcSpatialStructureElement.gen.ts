
import { IfcSpatialElement } from "./index"
import { IfcElementCompositionEnum, IfcElementCompositionEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcspatialstructureelement.htm */
export abstract class IfcSpatialStructureElement extends IfcSpatialElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT
  }
  private CompositionType_? : IfcElementCompositionEnum | null

  public get CompositionType() : IfcElementCompositionEnum | null {
    if ( this.CompositionType_ === void 0 ) {
      this.CompositionType_ = this.extractLambda( 8, IfcElementCompositionEnumDeserializeStep, true )
    }

    return this.CompositionType_ as IfcElementCompositionEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBUILDING, EntityTypesIfc.IFCBUILDINGSTOREY, EntityTypesIfc.IFCSITE, EntityTypesIfc.IFCSPACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSPATIALSTRUCTUREELEMENT
}
