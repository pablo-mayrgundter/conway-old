
import { IfcTimeSeries } from "./index"
import { IfcIrregularTimeSeriesValue } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcirregulartimeseries.htm */
export  class IfcIrregularTimeSeries extends IfcTimeSeries {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCIRREGULARTIMESERIES
  }
  private Values_? : Array<IfcIrregularTimeSeriesValue>

  public get Values() : Array<IfcIrregularTimeSeriesValue> {
    if ( this.Values_ === void 0 ) {
      this.Values_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      let value : Array<IfcIrregularTimeSeriesValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcIrregularTimeSeriesValue ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Values_ as Array<IfcIrregularTimeSeriesValue>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCIRREGULARTIMESERIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCIRREGULARTIMESERIES
}
