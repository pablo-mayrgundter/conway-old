
import { IfcTextureCoordinate } from "./index"
import { IfcTextureVertex } from "./index"
import { IfcFace } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturemap.htm */
export  class IfcTextureMap extends IfcTextureCoordinate {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTUREMAP
  }
  private Vertices_? : Array<IfcTextureVertex>
  private MappedTo_? : IfcFace

  public get Vertices() : Array<IfcTextureVertex> {
    if ( this.Vertices_ === void 0 ) {
      this.Vertices_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcTextureVertex> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcTextureVertex ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Vertices_ as Array<IfcTextureVertex>
  }

  public get MappedTo() : IfcFace {
    if ( this.MappedTo_ === void 0 ) {
      this.MappedTo_ = this.extractElement( 2, false, IfcFace )
    }

    return this.MappedTo_ as IfcFace
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTUREMAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTUREMAP
}
