
import { IfcPresentationStyle } from "./index"
import { IfcColourSpecification } from "./index"
import { IfcPreDefinedColour } from "./index"
import { IfcExternallyDefinedHatchStyle } from "./index"
import { IfcFillAreaStyleHatching } from "./index"
import { IfcFillAreaStyleTiles } from "./index"
import { IfcBoolean } from "./index"
import {
  stepExtractBoolean,
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyle.htm */
export  class IfcFillAreaStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFILLAREASTYLE
  }
  private FillStyles_? : Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>
  private ModelorDraughting_? : boolean | null

  public get FillStyles() : Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles> {
    if ( this.FillStyles_ === void 0 ) {
      this.FillStyles_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
          let expressID = stepExtractReference( buffer, cursor, endCursor );
          let value : StepEntityBase< EntityTypesIfc > | undefined =
            expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
            (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))
    
          if ( !( value instanceof IfcColourSpecification ) && !( value instanceof IfcPreDefinedColour ) && !( value instanceof IfcExternallyDefinedHatchStyle ) && !( value instanceof IfcFillAreaStyleHatching ) && !( value instanceof IfcFillAreaStyleTiles ) ) {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value as (IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles)
        })() )
      }

return value })()
    }

    return this.FillStyles_ as Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>
  }

  public get ModelorDraughting() : boolean | null {
    if ( this.ModelorDraughting_ === void 0 ) {
      this.ModelorDraughting_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

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

    return this.ModelorDraughting_ as boolean | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFILLAREASTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFILLAREASTYLE
}
