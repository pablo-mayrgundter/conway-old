
import { IfcIndexedPolygonalFace } from "./index"
import { IfcPositiveInteger } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcindexedpolygonalfacewithvoids.htm */
export  class IfcIndexedPolygonalFaceWithVoids extends IfcIndexedPolygonalFace {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS
  }
  private InnerCoordIndices_? : Array< Array< number > >

  public get InnerCoordIndices() : Array< Array< number > > {
    if ( this.InnerCoordIndices_ === void 0 ) {
      this.InnerCoordIndices_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

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
      return value }, false )
    }

    return this.InnerCoordIndices_ as Array< Array< number > >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS
}
