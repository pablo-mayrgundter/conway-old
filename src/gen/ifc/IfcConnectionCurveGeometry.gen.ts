
import { IfcConnectionGeometry } from "./index"
import { IfcBoundedCurve } from "./index"
import { IfcEdgeCurve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectioncurvegeometry.htm */
export  class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY
  }
  private CurveOnRelatingElement_? : IfcBoundedCurve | IfcEdgeCurve
  private CurveOnRelatedElement_? : IfcBoundedCurve | IfcEdgeCurve | null

  public get CurveOnRelatingElement() : IfcBoundedCurve | IfcEdgeCurve {
    if ( this.CurveOnRelatingElement_ === void 0 ) {
      this.CurveOnRelatingElement_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoundedCurve ) && !( value instanceof IfcEdgeCurve ) ) {
        return ( void 0 )
      }
      return value as (IfcBoundedCurve | IfcEdgeCurve)
}, false )
    }

    return this.CurveOnRelatingElement_ as IfcBoundedCurve | IfcEdgeCurve
  }

  public get CurveOnRelatedElement() : IfcBoundedCurve | IfcEdgeCurve | null {
    if ( this.CurveOnRelatedElement_ === void 0 ) {
      this.CurveOnRelatedElement_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcBoundedCurve ) && !( value instanceof IfcEdgeCurve ) ) {
        return ( void 0 )
      }
      return value as (IfcBoundedCurve | IfcEdgeCurve)
}, true )
    }

    return this.CurveOnRelatedElement_ as IfcBoundedCurve | IfcEdgeCurve | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY
}
