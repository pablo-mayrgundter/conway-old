
import { IfcBoundedCurve } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolyline.htm */
export  class IfcPolyline extends IfcBoundedCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPOLYLINE
  }
  private Points_? : Array<IfcCartesianPoint>

  public get Points() : Array<IfcCartesianPoint> {
    if ( this.Points_ === void 0 ) {
      this.Points_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

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

    return this.Points_ as Array<IfcCartesianPoint>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOLYLINE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPOLYLINE
}
