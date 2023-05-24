
import { IfcTessellatedFaceSet } from "./index"
import { IfcParameterValue } from "./index"
import { IfcBoolean } from "./index"
import { IfcPositiveInteger } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
  SIZEOF,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctriangulatedfaceset.htm */
export  class IfcTriangulatedFaceSet extends IfcTessellatedFaceSet {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTRIANGULATEDFACESET
  }
  private Normals_? : Array< Array< number > > | null
  private Closed_? : boolean | null
  private CoordIndex_? : Array< Array< number > >
  private PnIndex_? : Array< number > | null

  public get Normals() : Array< Array< number > > | null {
    if ( this.Normals_ === void 0 ) {
      this.Normals_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

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

    return this.Normals_ as Array< Array< number > > | null
  }

  public get Closed() : boolean | null {
    if ( this.Closed_ === void 0 ) {
      this.Closed_ = this.extractBoolean( 2, true )
    }

    return this.Closed_ as boolean | null
  }

  public get CoordIndex() : Array< Array< number > > {
    if ( this.CoordIndex_ === void 0 ) {
      this.CoordIndex_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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

    return this.CoordIndex_ as Array< Array< number > >
  }

  public get PnIndex() : Array< number > | null {
    if ( this.PnIndex_ === void 0 ) {
      this.PnIndex_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

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
      return value }, true )
    }

    return this.PnIndex_ as Array< number > | null
  }

  public get NumberOfTriangles() : number {
    return SIZEOF(this?.CoordIndex);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTRIANGULATEDFACESET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTRIANGULATEDFACESET
}
