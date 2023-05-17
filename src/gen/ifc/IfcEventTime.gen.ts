
import { IfcSchedulingTime } from "./index"
import { IfcDateTime } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifceventtime.htm */
export  class IfcEventTime extends IfcSchedulingTime {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEVENTTIME
  }
  private ActualDate_? : string | null
  private EarlyDate_? : string | null
  private LateDate_? : string | null
  private ScheduleDate_? : string | null

  public get ActualDate() : string | null {
    if ( this.ActualDate_ === void 0 ) {
      this.ActualDate_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ActualDate_ as string | null
  }

  public get EarlyDate() : string | null {
    if ( this.EarlyDate_ === void 0 ) {
      this.EarlyDate_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.EarlyDate_ as string | null
  }

  public get LateDate() : string | null {
    if ( this.LateDate_ === void 0 ) {
      this.LateDate_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.LateDate_ as string | null
  }

  public get ScheduleDate() : string | null {
    if ( this.ScheduleDate_ === void 0 ) {
      this.ScheduleDate_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ScheduleDate_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCEVENTTIME ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCEVENTTIME
}
