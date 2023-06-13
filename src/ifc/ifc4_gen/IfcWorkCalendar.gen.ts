
import { IfcControl } from "./index"
import { IfcWorkTime } from "./index"
import { IfcWorkCalendarTypeEnum, IfcWorkCalendarTypeEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcworkcalendar.htm */
export  class IfcWorkCalendar extends IfcControl {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCWORKCALENDAR
  }
  private WorkingTimes_? : Array<IfcWorkTime> | null
  private ExceptionTimes_? : Array<IfcWorkTime> | null
  private PredefinedType_? : IfcWorkCalendarTypeEnum | null

  public get WorkingTimes() : Array<IfcWorkTime> | null {
    if ( this.WorkingTimes_ === void 0 ) {
      this.WorkingTimes_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcWorkTime> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcWorkTime ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.WorkingTimes_ as Array<IfcWorkTime> | null
  }

  public get ExceptionTimes() : Array<IfcWorkTime> | null {
    if ( this.ExceptionTimes_ === void 0 ) {
      this.ExceptionTimes_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcWorkTime> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcWorkTime ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.ExceptionTimes_ as Array<IfcWorkTime> | null
  }

  public get PredefinedType() : IfcWorkCalendarTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 8, IfcWorkCalendarTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcWorkCalendarTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCWORKCALENDAR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCWORKCALENDAR
}
