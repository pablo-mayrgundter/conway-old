
import { IfcPoint } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
  HIINDEX,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesianpoint.htm */
export  class IfcCartesianPoint extends IfcPoint {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCARTESIANPOINT
  }
  private Coordinates_? : Array< number >

  public get Coordinates() : Array< number > {
    if ( this.Coordinates_ === void 0 ) {
      this.Coordinates_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

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

    return this.Coordinates_ as Array< number >
  }

  public get Dim() : number {
    return HIINDEX(this?.Coordinates);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCARTESIANPOINT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCARTESIANPOINT
}
