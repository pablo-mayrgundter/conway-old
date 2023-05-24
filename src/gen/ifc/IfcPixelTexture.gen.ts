
import { IfcSurfaceTexture } from "./index"
import { IfcInteger } from "./index"
import { IfcBinary } from "./index"
import {
  stepExtractBinary,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpixeltexture.htm */
export  class IfcPixelTexture extends IfcSurfaceTexture {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPIXELTEXTURE
  }
  private Width_? : number
  private Height_? : number
  private ColourComponents_? : number
  private Pixel_? : Array< [Uint8Array, number] >

  public get Width() : number {
    if ( this.Width_ === void 0 ) {
      this.Width_ = this.extractNumber( 5, false )
    }

    return this.Width_ as number
  }

  public get Height() : number {
    if ( this.Height_ === void 0 ) {
      this.Height_ = this.extractNumber( 6, false )
    }

    return this.Height_ as number
  }

  public get ColourComponents() : number {
    if ( this.ColourComponents_ === void 0 ) {
      this.ColourComponents_ = this.extractNumber( 7, false )
    }

    return this.ColourComponents_ as number
  }

  public get Pixel() : Array< [Uint8Array, number] > {
    if ( this.Pixel_ === void 0 ) {
      this.Pixel_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      let value : Array<[Uint8Array, number]> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractBinary( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.Pixel_ as Array< [Uint8Array, number] >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPIXELTEXTURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPIXELTEXTURE
}
