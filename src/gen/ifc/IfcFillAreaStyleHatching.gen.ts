
import { IfcGeometricRepresentationItem } from "./index"
import { IfcCurveStyle } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcVector } from "./index"
import { IfcCartesianPoint } from "./index"
import { IfcPlaneAngleMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastylehatching.htm */
export  class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFILLAREASTYLEHATCHING
  }
  private HatchLineAppearance_? : IfcCurveStyle
  private StartOfNextHatchLine_? : IfcPositiveLengthMeasure | IfcVector
  private PointOfReferenceHatchLine_? : IfcCartesianPoint | null
  private PatternStart_? : IfcCartesianPoint | null
  private HatchLineAngle_? : number

  public get HatchLineAppearance() : IfcCurveStyle {
    if ( this.HatchLineAppearance_ === void 0 ) {
      this.HatchLineAppearance_ = this.extractElement( 0, false, IfcCurveStyle )
    }

    return this.HatchLineAppearance_ as IfcCurveStyle
  }

  public get StartOfNextHatchLine() : IfcPositiveLengthMeasure | IfcVector {
    if ( this.StartOfNextHatchLine_ === void 0 ) {
      this.StartOfNextHatchLine_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcPositiveLengthMeasure ) && !( value instanceof IfcVector ) ) {
        return ( void 0 )
      }
      return value as (IfcPositiveLengthMeasure | IfcVector)
}, false )
    }

    return this.StartOfNextHatchLine_ as IfcPositiveLengthMeasure | IfcVector
  }

  public get PointOfReferenceHatchLine() : IfcCartesianPoint | null {
    if ( this.PointOfReferenceHatchLine_ === void 0 ) {
      this.PointOfReferenceHatchLine_ = this.extractElement( 2, true, IfcCartesianPoint )
    }

    return this.PointOfReferenceHatchLine_ as IfcCartesianPoint | null
  }

  public get PatternStart() : IfcCartesianPoint | null {
    if ( this.PatternStart_ === void 0 ) {
      this.PatternStart_ = this.extractElement( 3, true, IfcCartesianPoint )
    }

    return this.PatternStart_ as IfcCartesianPoint | null
  }

  public get HatchLineAngle() : number {
    if ( this.HatchLineAngle_ === void 0 ) {
      this.HatchLineAngle_ = this.extractNumber( 4, false )
    }

    return this.HatchLineAngle_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFILLAREASTYLEHATCHING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFILLAREASTYLEHATCHING
}
