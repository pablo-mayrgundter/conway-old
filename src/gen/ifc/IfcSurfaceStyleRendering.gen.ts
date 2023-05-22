
import { IfcSurfaceStyleShading } from "./index"
import { IfcColourRgb } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcSpecularExponent } from "./index"
import { IfcSpecularRoughness } from "./index"
import { IfcReflectanceMethodEnum, IfcReflectanceMethodEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestylerendering.htm */
export  class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACESTYLERENDERING
  }
  private DiffuseColour_? : IfcColourRgb | IfcNormalisedRatioMeasure | null
  private TransmissionColour_? : IfcColourRgb | IfcNormalisedRatioMeasure | null
  private DiffuseTransmissionColour_? : IfcColourRgb | IfcNormalisedRatioMeasure | null
  private ReflectionColour_? : IfcColourRgb | IfcNormalisedRatioMeasure | null
  private SpecularColour_? : IfcColourRgb | IfcNormalisedRatioMeasure | null
  private SpecularHighlight_? : IfcSpecularExponent | IfcSpecularRoughness | null
  private ReflectanceMethod_? : IfcReflectanceMethodEnum

  public get DiffuseColour() : IfcColourRgb | IfcNormalisedRatioMeasure | null {
    if ( this.DiffuseColour_ === void 0 ) {
      this.DiffuseColour_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcColourRgb | IfcNormalisedRatioMeasure)
}, true )
    }

    return this.DiffuseColour_ as IfcColourRgb | IfcNormalisedRatioMeasure | null
  }

  public get TransmissionColour() : IfcColourRgb | IfcNormalisedRatioMeasure | null {
    if ( this.TransmissionColour_ === void 0 ) {
      this.TransmissionColour_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcColourRgb | IfcNormalisedRatioMeasure)
}, true )
    }

    return this.TransmissionColour_ as IfcColourRgb | IfcNormalisedRatioMeasure | null
  }

  public get DiffuseTransmissionColour() : IfcColourRgb | IfcNormalisedRatioMeasure | null {
    if ( this.DiffuseTransmissionColour_ === void 0 ) {
      this.DiffuseTransmissionColour_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcColourRgb | IfcNormalisedRatioMeasure)
}, true )
    }

    return this.DiffuseTransmissionColour_ as IfcColourRgb | IfcNormalisedRatioMeasure | null
  }

  public get ReflectionColour() : IfcColourRgb | IfcNormalisedRatioMeasure | null {
    if ( this.ReflectionColour_ === void 0 ) {
      this.ReflectionColour_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcColourRgb | IfcNormalisedRatioMeasure)
}, true )
    }

    return this.ReflectionColour_ as IfcColourRgb | IfcNormalisedRatioMeasure | null
  }

  public get SpecularColour() : IfcColourRgb | IfcNormalisedRatioMeasure | null {
    if ( this.SpecularColour_ === void 0 ) {
      this.SpecularColour_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcColourRgb | IfcNormalisedRatioMeasure)
}, true )
    }

    return this.SpecularColour_ as IfcColourRgb | IfcNormalisedRatioMeasure | null
  }

  public get SpecularHighlight() : IfcSpecularExponent | IfcSpecularRoughness | null {
    if ( this.SpecularHighlight_ === void 0 ) {
      this.SpecularHighlight_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcSpecularExponent ) && !( value instanceof IfcSpecularRoughness ) ) {
        return ( void 0 )
      }
      return value as (IfcSpecularExponent | IfcSpecularRoughness)
}, true )
    }

    return this.SpecularHighlight_ as IfcSpecularExponent | IfcSpecularRoughness | null
  }

  public get ReflectanceMethod() : IfcReflectanceMethodEnum {
    if ( this.ReflectanceMethod_ === void 0 ) {
      this.ReflectanceMethod_ = this.extractLambda( 8, IfcReflectanceMethodEnumDeserializeStep, false )
    }

    return this.ReflectanceMethod_ as IfcReflectanceMethodEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSURFACESTYLERENDERING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACESTYLERENDERING
}
