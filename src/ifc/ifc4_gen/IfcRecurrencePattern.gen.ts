
import { IfcRecurrenceTypeEnum, IfcRecurrenceTypeEnumDeserializeStep } from "./index"
import { IfcDayInMonthNumber } from "./index"
import { IfcDayInWeekNumber } from "./index"
import { IfcMonthInYearNumber } from "./index"
import { IfcInteger } from "./index"
import { IfcTimePeriod } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrecurrencepattern.htm */
export  class IfcRecurrencePattern extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRECURRENCEPATTERN
  }
  private RecurrenceType_? : IfcRecurrenceTypeEnum
  private DayComponent_? : Array< number > | null
  private WeekdayComponent_? : Array< number > | null
  private MonthComponent_? : Array< number > | null
  private Position_? : number | null
  private Interval_? : number | null
  private Occurrences_? : number | null
  private TimePeriods_? : Array<IfcTimePeriod> | null

  public get RecurrenceType() : IfcRecurrenceTypeEnum {
    if ( this.RecurrenceType_ === void 0 ) {
      this.RecurrenceType_ = this.extractLambda( 0, IfcRecurrenceTypeEnumDeserializeStep, false )
    }

    return this.RecurrenceType_ as IfcRecurrenceTypeEnum
  }

  public get DayComponent() : Array< number > | null {
    if ( this.DayComponent_ === void 0 ) {
      this.DayComponent_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

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

    return this.DayComponent_ as Array< number > | null
  }

  public get WeekdayComponent() : Array< number > | null {
    if ( this.WeekdayComponent_ === void 0 ) {
      this.WeekdayComponent_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

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

    return this.WeekdayComponent_ as Array< number > | null
  }

  public get MonthComponent() : Array< number > | null {
    if ( this.MonthComponent_ === void 0 ) {
      this.MonthComponent_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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

    return this.MonthComponent_ as Array< number > | null
  }

  public get Position() : number | null {
    if ( this.Position_ === void 0 ) {
      this.Position_ = this.extractNumber( 4, true )
    }

    return this.Position_ as number | null
  }

  public get Interval() : number | null {
    if ( this.Interval_ === void 0 ) {
      this.Interval_ = this.extractNumber( 5, true )
    }

    return this.Interval_ as number | null
  }

  public get Occurrences() : number | null {
    if ( this.Occurrences_ === void 0 ) {
      this.Occurrences_ = this.extractNumber( 6, true )
    }

    return this.Occurrences_ as number | null
  }

  public get TimePeriods() : Array<IfcTimePeriod> | null {
    if ( this.TimePeriods_ === void 0 ) {
      this.TimePeriods_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcTimePeriod> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcTimePeriod ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.TimePeriods_ as Array<IfcTimePeriod> | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRECURRENCEPATTERN ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRECURRENCEPATTERN
}
