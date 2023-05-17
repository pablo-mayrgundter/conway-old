
import { IfcPresentationItem } from "./index"
import { IfcLabel } from "./index"
import { IfcCurveStyleFont } from "./index"
import { IfcPreDefinedCurveFont } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
  stepExtractReference,
  stepExtractNumber,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurvestylefontandscaling.htm */
export  class IfcCurveStyleFontAndScaling extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING
  }
  private Name_? : string | null
  private CurveFont_? : IfcCurveStyleFont|IfcPreDefinedCurveFont
  private CurveFontScaling_? : number

  public get Name() : string | null {
    if ( this.Name_ === void 0 ) {
      this.Name_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.Name_ as string | null
  }

  public get CurveFont() : IfcCurveStyleFont|IfcPreDefinedCurveFont {
    if ( this.CurveFont_ === void 0 ) {
      this.CurveFont_ = (() => { 
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
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcCurveStyleFont ) && !( value instanceof IfcPreDefinedCurveFont ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcCurveStyleFont | IfcPreDefinedCurveFont) })()
    }

    return this.CurveFont_ as IfcCurveStyleFont|IfcPreDefinedCurveFont
  }

  public get CurveFontScaling() : number {
    if ( this.CurveFontScaling_ === void 0 ) {
      this.CurveFontScaling_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractNumber( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.CurveFontScaling_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVESTYLEFONTANDSCALING
}
