
import { IfcSpatialStructureElement } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcPostalAddress } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuilding.htm */
export  class IfcBuilding extends IfcSpatialStructureElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBUILDING
  }
  private ElevationOfRefHeight_? : number | null
  private ElevationOfTerrain_? : number | null
  private BuildingAddress_? : IfcPostalAddress | null

  public get ElevationOfRefHeight() : number | null {
    if ( this.ElevationOfRefHeight_ === void 0 ) {
      this.ElevationOfRefHeight_ = this.extractNumber( 9, true )
    }

    return this.ElevationOfRefHeight_ as number | null
  }

  public get ElevationOfTerrain() : number | null {
    if ( this.ElevationOfTerrain_ === void 0 ) {
      this.ElevationOfTerrain_ = this.extractNumber( 10, true )
    }

    return this.ElevationOfTerrain_ as number | null
  }

  public get BuildingAddress() : IfcPostalAddress | null {
    if ( this.BuildingAddress_ === void 0 ) {
      this.BuildingAddress_ = this.extractElement( 11, true, IfcPostalAddress )
    }

    return this.BuildingAddress_ as IfcPostalAddress | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBUILDING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBUILDING
}
