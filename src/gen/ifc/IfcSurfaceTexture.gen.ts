
import { IfcPresentationItem } from "./index"
import { IfcBoolean } from "./index"
import { IfcIdentifier } from "./index"
import { IfcCartesianTransformationOperator2D } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacetexture.htm */
export abstract class IfcSurfaceTexture extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSURFACETEXTURE
  }
  private RepeatS_? : boolean
  private RepeatT_? : boolean
  private Mode_? : string | null
  private TextureTransform_? : IfcCartesianTransformationOperator2D | null
  private Parameter_? : Array< string > | null

  public get RepeatS() : boolean {
    if ( this.RepeatS_ === void 0 ) {
      this.RepeatS_ = this.extractBoolean( 0, false )
    }

    return this.RepeatS_ as boolean
  }

  public get RepeatT() : boolean {
    if ( this.RepeatT_ === void 0 ) {
      this.RepeatT_ = this.extractBoolean( 1, false )
    }

    return this.RepeatT_ as boolean
  }

  public get Mode() : string | null {
    if ( this.Mode_ === void 0 ) {
      this.Mode_ = this.extractString( 2, true )
    }

    return this.Mode_ as string | null
  }

  public get TextureTransform() : IfcCartesianTransformationOperator2D | null {
    if ( this.TextureTransform_ === void 0 ) {
      this.TextureTransform_ = this.extractElement( 3, true, IfcCartesianTransformationOperator2D )
    }

    return this.TextureTransform_ as IfcCartesianTransformationOperator2D | null
  }

  public get Parameter() : Array< string > | null {
    if ( this.Parameter_ === void 0 ) {
      this.Parameter_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<string> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractString( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, true )
    }

    return this.Parameter_ as Array< string > | null
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBLOBTEXTURE, EntityTypesIfc.IFCIMAGETEXTURE, EntityTypesIfc.IFCPIXELTEXTURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSURFACETEXTURE
}
