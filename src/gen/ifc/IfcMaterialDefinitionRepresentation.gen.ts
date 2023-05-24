
import { IfcProductRepresentation } from "./index"
import { IfcMaterial } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialdefinitionrepresentation.htm */
export  class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION
  }
  private RepresentedMaterial_? : IfcMaterial

  public get RepresentedMaterial() : IfcMaterial {
    if ( this.RepresentedMaterial_ === void 0 ) {
      this.RepresentedMaterial_ = this.extractElement( 3, false, IfcMaterial )
    }

    return this.RepresentedMaterial_ as IfcMaterial
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION
}
