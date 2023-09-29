
import { IfcTimeSeries } from "./index"
import { IfcTimeMeasure } from "./index"
import { IfcTimeSeriesValue } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcregulartimeseries.htm */
export  class IfcRegularTimeSeries extends IfcTimeSeries {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREGULARTIMESERIES
  }
  private TimeStep_? : number
  private Values_? : Array<IfcTimeSeriesValue>

  public get TimeStep() : number {
    if ( this.TimeStep_ === void 0 ) {
      this.TimeStep_ = this.extractNumber( 8, false )
    }

    return this.TimeStep_ as number
  }

  public get Values() : Array<IfcTimeSeriesValue> {
    if ( this.Values_ === void 0 ) {
      this.Values_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

      let value : Array<IfcTimeSeriesValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcTimeSeriesValue ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Values_ as Array<IfcTimeSeriesValue>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREGULARTIMESERIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREGULARTIMESERIES
}
