
import { IfcHalfSpaceSolid } from "./index"
import { IfcAxis2Placement3D } from "./index"
import { IfcBoundedCurve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolygonalboundedhalfspace.htm */
export  class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE
  }
  private Position_? : IfcAxis2Placement3D
  private PolygonalBoundary_? : IfcBoundedCurve

  public get Position() : IfcAxis2Placement3D {
    if ( this.Position_ === void 0 ) {
      this.Position_ = this.extractElement( 2, false, IfcAxis2Placement3D )
    }

    return this.Position_ as IfcAxis2Placement3D
  }

  public get PolygonalBoundary() : IfcBoundedCurve {
    if ( this.PolygonalBoundary_ === void 0 ) {
      this.PolygonalBoundary_ = this.extractElement( 3, false, IfcBoundedCurve )
    }

    return this.PolygonalBoundary_ as IfcBoundedCurve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE
}
