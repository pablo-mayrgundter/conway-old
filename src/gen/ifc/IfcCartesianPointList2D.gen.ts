
import { IfcCartesianPointList } from "./index"
import { IfcLengthMeasure } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesianpointlist2d.htm */
export  class IfcCartesianPointList2D extends IfcCartesianPointList {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCARTESIANPOINTLIST2D
  }
  private CoordList_? : Array< Array< number > >

  public get CoordList() : Array< Array< number > > {
    if ( this.CoordList_ === void 0 ) {
      this.CoordList_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

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

    return this.CoordList_ as Array< Array< number > >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCARTESIANPOINTLIST2D ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCARTESIANPOINTLIST2D
}
