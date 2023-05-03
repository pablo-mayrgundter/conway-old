
import { IfcLoop } from "./index"
import { IfcCartesianPoint } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolyloop.htm */
export  class IfcPolyLoop extends IfcLoop {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPOLYLOOP
  }
  private Polygon_? : Array<IfcCartesianPoint>

  public get Polygon() : Array<IfcCartesianPoint> {
    if ( this.Polygon_ === void 0 ) {
      this.Polygon_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcCartesianPoint> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCartesianPoint ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Polygon_ as Array<IfcCartesianPoint>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOLYLOOP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPOLYLOOP
}
