
import { IfcIndexedTextureMap } from "./index"
import { IfcPositiveInteger } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcindexedtriangletexturemap.htm */
export  class IfcIndexedTriangleTextureMap extends IfcIndexedTextureMap {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP
  }
  private TexCoordIndex_? : Array< Array< number > > | null

  public get TexCoordIndex() : Array< Array< number > > | null {
    if ( this.TexCoordIndex_ === void 0 ) {
      this.TexCoordIndex_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<Array<number>> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          let value : Array<number> = [];
    
          for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
            value.push( (() => {
                  const cursor = address
                  const value = stepExtractNumber( buffer, cursor, endCursor )
            
                  if ( value === void 0 ) {
                    throw new Error( 'Value needs to be defined in encapsulating context' )
                  }
            
                  return value 
                })() )
          }
                if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, true )
    }

    return this.TexCoordIndex_ as Array< Array< number > > | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCINDEXEDTRIANGLETEXTUREMAP
}
