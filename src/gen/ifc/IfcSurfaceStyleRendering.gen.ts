
import { IfcSurfaceStyleShading } from "./index"
import { IfcColourRgb } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcSpecularExponent } from "./index"
import { IfcSpecularRoughness } from "./index"
import { IfcReflectanceMethodEnum, IfcReflectanceMethodEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

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
  private DiffuseColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null
  private TransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null
  private DiffuseTransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null
  private ReflectionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null
  private SpecularColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null
  private SpecularHighlight_? : IfcSpecularExponent|IfcSpecularRoughness | null
  private ReflectanceMethod_? : IfcReflectanceMethodEnum

  public get DiffuseColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null {
    if ( this.DiffuseColour_ === void 0 ) {
      this.DiffuseColour_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcColourRgb | IfcNormalisedRatioMeasure);
      } })()
    }

    return this.DiffuseColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null
  }

  public get TransmissionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null {
    if ( this.TransmissionColour_ === void 0 ) {
      this.TransmissionColour_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcColourRgb | IfcNormalisedRatioMeasure);
      } })()
    }

    return this.TransmissionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null
  }

  public get DiffuseTransmissionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null {
    if ( this.DiffuseTransmissionColour_ === void 0 ) {
      this.DiffuseTransmissionColour_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcColourRgb | IfcNormalisedRatioMeasure);
      } })()
    }

    return this.DiffuseTransmissionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null
  }

  public get ReflectionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null {
    if ( this.ReflectionColour_ === void 0 ) {
      this.ReflectionColour_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcColourRgb | IfcNormalisedRatioMeasure);
      } })()
    }

    return this.ReflectionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null
  }

  public get SpecularColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null {
    if ( this.SpecularColour_ === void 0 ) {
      this.SpecularColour_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcColourRgb ) && !( value instanceof IfcNormalisedRatioMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcColourRgb | IfcNormalisedRatioMeasure);
      } })()
    }

    return this.SpecularColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null
  }

  public get SpecularHighlight() : IfcSpecularExponent|IfcSpecularRoughness | null {
    if ( this.SpecularHighlight_ === void 0 ) {
      this.SpecularHighlight_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 7 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 7

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcSpecularExponent ) && !( value instanceof IfcSpecularRoughness ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcSpecularExponent | IfcSpecularRoughness);
      } })()
    }

    return this.SpecularHighlight_ as IfcSpecularExponent|IfcSpecularRoughness | null
  }

  public get ReflectanceMethod() : IfcReflectanceMethodEnum {
    if ( this.ReflectanceMethod_ === void 0 ) {
      this.ReflectanceMethod_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 8 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 8

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcReflectanceMethodEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
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
