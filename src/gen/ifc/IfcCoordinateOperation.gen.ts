
import { IfcCoordinateReferenceSystem } from "./index"
import { IfcGeometricRepresentationContext } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccoordinateoperation.htm */
export abstract class IfcCoordinateOperation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOORDINATEOPERATION
  }
  private SourceCRS_? : IfcCoordinateReferenceSystem | IfcGeometricRepresentationContext
  private TargetCRS_? : IfcCoordinateReferenceSystem

  public get SourceCRS() : IfcCoordinateReferenceSystem | IfcGeometricRepresentationContext {
    if ( this.SourceCRS_ === void 0 ) {
      this.SourceCRS_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcCoordinateReferenceSystem ) && !( value instanceof IfcGeometricRepresentationContext ) ) {
        return ( void 0 )
      }
      return value as (IfcCoordinateReferenceSystem | IfcGeometricRepresentationContext)
}, false )
    }

    return this.SourceCRS_ as IfcCoordinateReferenceSystem | IfcGeometricRepresentationContext
  }

  public get TargetCRS() : IfcCoordinateReferenceSystem {
    if ( this.TargetCRS_ === void 0 ) {
      this.TargetCRS_ = this.extractElement( 1, false, IfcCoordinateReferenceSystem )
    }

    return this.TargetCRS_ as IfcCoordinateReferenceSystem
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMAPCONVERSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOORDINATEOPERATION
}
