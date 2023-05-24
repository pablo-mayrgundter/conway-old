
import { IfcConnectionGeometry } from "./index"
import { IfcPoint } from "./index"
import { IfcVertexPoint } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionpointgeometry.htm */
export  class IfcConnectionPointGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY
  }
  private PointOnRelatingElement_? : IfcPoint | IfcVertexPoint
  private PointOnRelatedElement_? : IfcPoint | IfcVertexPoint | null

  public get PointOnRelatingElement() : IfcPoint | IfcVertexPoint {
    if ( this.PointOnRelatingElement_ === void 0 ) {
      this.PointOnRelatingElement_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcPoint ) && !( value instanceof IfcVertexPoint ) ) {
        return ( void 0 )
      }
      return value as (IfcPoint | IfcVertexPoint)
}, false )
    }

    return this.PointOnRelatingElement_ as IfcPoint | IfcVertexPoint
  }

  public get PointOnRelatedElement() : IfcPoint | IfcVertexPoint | null {
    if ( this.PointOnRelatedElement_ === void 0 ) {
      this.PointOnRelatedElement_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcPoint ) && !( value instanceof IfcVertexPoint ) ) {
        return ( void 0 )
      }
      return value as (IfcPoint | IfcVertexPoint)
}, true )
    }

    return this.PointOnRelatedElement_ as IfcPoint | IfcVertexPoint | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY, EntityTypesIfc.IFCCONNECTIONPOINTECCENTRICITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY
}
