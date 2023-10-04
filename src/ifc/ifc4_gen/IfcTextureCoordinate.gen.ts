
import { IfcPresentationItem } from "./index"
import { IfcSurfaceTexture } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturecoordinate.htm */
export abstract class IfcTextureCoordinate extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTURECOORDINATE
  }
  private Maps_? : Array<IfcSurfaceTexture>

  public get Maps() : Array<IfcSurfaceTexture> {
    if ( this.Maps_ === void 0 ) {
      this.Maps_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcSurfaceTexture> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcSurfaceTexture ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Maps_ as Array<IfcSurfaceTexture>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR, EntityTypesIfc.IFCTEXTUREMAP, EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTURECOORDINATE
}
