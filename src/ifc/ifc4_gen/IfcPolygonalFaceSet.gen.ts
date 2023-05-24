
import { IfcTessellatedFaceSet } from "./index"
import { IfcBoolean } from "./index"
import { IfcIndexedPolygonalFace } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolygonalfaceset.htm */
export  class IfcPolygonalFaceSet extends IfcTessellatedFaceSet {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPOLYGONALFACESET
  }
  private Closed_? : boolean | null
  private Faces_? : Array<IfcIndexedPolygonalFace>
  private PnIndex_? : Array< number > | null

  public get Closed() : boolean | null {
    if ( this.Closed_ === void 0 ) {
      this.Closed_ = this.extractBoolean( 1, true )
    }

    return this.Closed_ as boolean | null
  }

  public get Faces() : Array<IfcIndexedPolygonalFace> {
    if ( this.Faces_ === void 0 ) {
      this.Faces_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcIndexedPolygonalFace> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcIndexedPolygonalFace ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Faces_ as Array<IfcIndexedPolygonalFace>
  }

  public get PnIndex() : Array< number > | null {
    if ( this.PnIndex_ === void 0 ) {
      this.PnIndex_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOLYGONALFACESET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPOLYGONALFACESET
}
