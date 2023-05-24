
import { IfcPresentationStyle } from "./index"
import { IfcSurfaceSide, IfcSurfaceSideDeserializeStep } from "./index"
import { IfcExternallyDefinedSurfaceStyle } from "./index"
import { IfcSurfaceStyleLighting } from "./index"
import { IfcSurfaceStyleRefraction } from "./index"
import { IfcSurfaceStyleShading } from "./index"
import { IfcSurfaceStyleWithTextures } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestyle.htm */
export  class IfcSurfaceStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACESTYLE
  }
  private Side_? : IfcSurfaceSide
  private Styles_? : Array<IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures>

  public get Side() : IfcSurfaceSide {
    if ( this.Side_ === void 0 ) {
      this.Side_ = this.extractLambda( 1, IfcSurfaceSideDeserializeStep, false )
    }

    return this.Side_ as IfcSurfaceSide
  }

  public get Styles() : Array<IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures> {
    if ( this.Styles_ === void 0 ) {
      this.Styles_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcExternallyDefinedSurfaceStyle ) && !( value instanceof IfcSurfaceStyleLighting ) && !( value instanceof IfcSurfaceStyleRefraction ) && !( value instanceof IfcSurfaceStyleShading ) && !( value instanceof IfcSurfaceStyleWithTextures ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures)})() )
      }
      return value }, false )
    }

    return this.Styles_ as Array<IfcExternallyDefinedSurfaceStyle | IfcSurfaceStyleLighting | IfcSurfaceStyleRefraction | IfcSurfaceStyleShading | IfcSurfaceStyleWithTextures>
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
