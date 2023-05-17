
import { IfcPresentationStyle } from "./index"
import { IfcTextStyleForDefinedFont } from "./index"
import { IfcTextStyleTextModel } from "./index"
import { IfcExternallyDefinedTextFont } from "./index"
import { IfcPreDefinedTextFont } from "./index"
import { IfcBoolean } from "./index"
import {
  stepExtractBoolean,
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstyle.htm */
export  class IfcTextStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTSTYLE
  }
  private TextCharacterAppearance_? : IfcTextStyleForDefinedFont | null
  private TextStyle_? : IfcTextStyleTextModel | null
  private TextFontStyle_? : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
  private ModelOrDraughting_? : boolean | null

  public get TextCharacterAppearance() : IfcTextStyleForDefinedFont | null {
    if ( this.TextCharacterAppearance_ === void 0 ) {
      this.TextCharacterAppearance_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcTextStyleForDefinedFont ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.TextCharacterAppearance_ as IfcTextStyleForDefinedFont | null
  }

  public get TextStyle() : IfcTextStyleTextModel | null {
    if ( this.TextStyle_ === void 0 ) {
      this.TextStyle_ = (() => { 
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
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcTextStyleTextModel ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.TextStyle_ as IfcTextStyleTextModel | null
  }

  public get TextFontStyle() : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont {
    if ( this.TextFontStyle_ === void 0 ) {
      this.TextFontStyle_ = (() => { 
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

      if ( !( value instanceof IfcExternallyDefinedTextFont ) && !( value instanceof IfcPreDefinedTextFont ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcExternallyDefinedTextFont | IfcPreDefinedTextFont) })()
    }

    return this.TextFontStyle_ as IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
  }

  public get ModelOrDraughting() : boolean | null {
    if ( this.ModelOrDraughting_ === void 0 ) {
      this.ModelOrDraughting_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractBoolean( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
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
    [ EntityTypesIfc.IFCTEXTSTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTSTYLE
}
