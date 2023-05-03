
import { IfcBoundedCurve } from "./index"
import { IfcCartesianPointList } from "./index"
import { IfcArcIndex } from "./index"
import { IfcLineIndex } from "./index"
import { IfcBoolean } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcindexedpolycurve.htm */
export  class IfcIndexedPolyCurve extends IfcBoundedCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCINDEXEDPOLYCURVE
  }
  private Points_? : IfcCartesianPointList
  private Segments_? : Array<IfcArcIndex | IfcLineIndex> | null
  private SelfIntersect_? : boolean | null

  public get Points() : IfcCartesianPointList {
    if ( this.Points_ === void 0 ) {
      this.Points_ = this.extractElement( 0, false, IfcCartesianPointList )
    }

    return this.Points_ as IfcCartesianPointList
  }

  public get Segments() : Array<IfcArcIndex | IfcLineIndex> | null {
    if ( this.Segments_ === void 0 ) {
      this.Segments_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcArcIndex | IfcLineIndex> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcArcIndex ) && !( value instanceof IfcLineIndex ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcArcIndex | IfcLineIndex)})() )
      }
      return value }, true )
    }

    return this.Segments_ as Array<IfcArcIndex | IfcLineIndex> | null
  }

  public get SelfIntersect() : boolean | null {
    if ( this.SelfIntersect_ === void 0 ) {
      this.SelfIntersect_ = this.extractBoolean( 2, true )
    }

    return this.SelfIntersect_ as boolean | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCINDEXEDPOLYCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCINDEXEDPOLYCURVE
}
