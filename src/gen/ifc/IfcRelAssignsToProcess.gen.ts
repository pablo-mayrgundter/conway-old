
import { IfcRelAssigns } from "./index"
import { IfcProcess } from "./index"
import { IfcTypeProcess } from "./index"
import { IfcMeasureWithUnit } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstoprocess.htm */
export  class IfcRelAssignsToProcess extends IfcRelAssigns {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSIGNSTOPROCESS
  }
  private RelatingProcess_? : IfcProcess|IfcTypeProcess
  private QuantityInProcess_? : IfcMeasureWithUnit | null

  public get RelatingProcess() : IfcProcess|IfcTypeProcess {
    if ( this.RelatingProcess_ === void 0 ) {
      this.RelatingProcess_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcProcess ) && !( value instanceof IfcTypeProcess ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcProcess | IfcTypeProcess) })()
    }

    return this.RelatingProcess_ as IfcProcess|IfcTypeProcess
  }

  public get QuantityInProcess() : IfcMeasureWithUnit | null {
    if ( this.QuantityInProcess_ === void 0 ) {
      this.QuantityInProcess_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 7 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 7

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcMeasureWithUnit ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.QuantityInProcess_ as IfcMeasureWithUnit | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSIGNSTOPROCESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSIGNSTOPROCESS
}
