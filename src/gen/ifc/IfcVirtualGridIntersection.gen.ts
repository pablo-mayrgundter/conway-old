
import { IfcGridAxis } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvirtualgridintersection.htm */
export  class IfcVirtualGridIntersection extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION
  }
  private IntersectingAxes_? : Array<IfcGridAxis>
  private OffsetDistances_? : Array< number >

  public get IntersectingAxes() : Array<IfcGridAxis> {
    if ( this.IntersectingAxes_ === void 0 ) {
      this.IntersectingAxes_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcGridAxis> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcGridAxis ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.IntersectingAxes_ as Array<IfcGridAxis>
  }

  public get OffsetDistances() : Array< number > {
    if ( this.OffsetDistances_ === void 0 ) {
      this.OffsetDistances_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

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
      return value }, false )
    }

    return this.OffsetDistances_ as Array< number >
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION
}
