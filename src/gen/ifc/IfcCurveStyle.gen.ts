
import { IfcPresentationStyle } from "./index"
import { IfcCurveStyleFontAndScaling } from "./index"
import { IfcCurveStyleFont } from "./index"
import { IfcPreDefinedCurveFont } from "./index"
import { IfcDescriptiveMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcRatioMeasure } from "./index"
import { IfcColourSpecification } from "./index"
import { IfcPreDefinedColour } from "./index"
import { IfcBoolean } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurvestyle.htm */
export  class IfcCurveStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVESTYLE
  }
  private CurveFont_? : IfcCurveStyleFontAndScaling | IfcCurveStyleFont | IfcPreDefinedCurveFont | null
  private CurveWidth_? : IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure | null
  private CurveColour_? : IfcColourSpecification | IfcPreDefinedColour | null
  private ModelOrDraughting_? : boolean | null

  public get CurveFont() : IfcCurveStyleFontAndScaling | IfcCurveStyleFont | IfcPreDefinedCurveFont | null {
    if ( this.CurveFont_ === void 0 ) {
      this.CurveFont_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcCurveStyleFontAndScaling ) && !( value instanceof IfcCurveStyleFont ) && !( value instanceof IfcPreDefinedCurveFont ) ) {
        return ( void 0 )
      }
      return value as (IfcCurveStyleFontAndScaling | IfcCurveStyleFont | IfcPreDefinedCurveFont)
}, true )
    }

    return this.CurveFont_ as IfcCurveStyleFontAndScaling | IfcCurveStyleFont | IfcPreDefinedCurveFont | null
  }

  public get CurveWidth() : IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure | null {
    if ( this.CurveWidth_ === void 0 ) {
      this.CurveWidth_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcDescriptiveMeasure ) && !( value instanceof IfcLengthMeasure ) && !( value instanceof IfcNormalisedRatioMeasure ) && !( value instanceof IfcPositiveLengthMeasure ) && !( value instanceof IfcPositiveRatioMeasure ) && !( value instanceof IfcRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure)
}, true )
    }

    return this.CurveWidth_ as IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure | null
  }

  public get CurveColour() : IfcColourSpecification | IfcPreDefinedColour | null {
    if ( this.CurveColour_ === void 0 ) {
      this.CurveColour_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourSpecification ) && !( value instanceof IfcPreDefinedColour ) ) {
        return ( void 0 )
      }
      return value as (IfcColourSpecification | IfcPreDefinedColour)
}, true )
    }

    return this.CurveColour_ as IfcColourSpecification | IfcPreDefinedColour | null
  }

  public get ModelOrDraughting() : boolean | null {
    if ( this.ModelOrDraughting_ === void 0 ) {
      this.ModelOrDraughting_ = this.extractBoolean( 4, true )
    }

    return this.ModelOrDraughting_ as boolean | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURVESTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVESTYLE
}
