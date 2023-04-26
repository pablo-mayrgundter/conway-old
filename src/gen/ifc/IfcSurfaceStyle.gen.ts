
import { IfcPresentationStyle } from "./index"
import { IfcSurfaceSide, IfcSurfaceSideDeserializeStep } from "./index"
import { IfcExternallyDefinedSurfaceStyle } from "./index"
import { IfcSurfaceStyleLighting } from "./index"
import { IfcSurfaceStyleRefraction } from "./index"
import { IfcSurfaceStyleShading } from "./index"
import { IfcSurfaceStyleWithTextures } from "./index"
import {
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestyle.htm */
export  class IfcSurfaceStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACESTYLE
  }
  private Side_? : IfcSurfaceSide
  private Styles_? : Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures>

  public get Side() : IfcSurfaceSide {
    if ( this.Side_ === void 0 ) {
      this.Side_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcSurfaceSideDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.Side_ as IfcSurfaceSide
  }

  public get Styles() : Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures> {
    if ( this.Styles_ === void 0 ) {
      this.Styles_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
          let expressID = stepExtractReference( buffer, cursor, endCursor );
          let value : StepEntityBase< EntityTypesIfc > | undefined =
            expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
            (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))
    
          if ( !( value instanceof IfcExternallyDefinedSurfaceStyle ) && !( value instanceof IfcSurfaceStyleLighting ) && !( value instanceof IfcSurfaceStyleRefraction ) && !( value instanceof IfcSurfaceStyleShading ) && !( value instanceof IfcSurfaceStyleWithTextures ) ) {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value as (IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures)
        })() )
      }

return value })()
    }

    return this.Styles_ as Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSURFACESTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACESTYLE
}
