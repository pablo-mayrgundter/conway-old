
import { IfcBSplineCurveWithKnots } from "./index"
import { IfcReal } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrationalbsplinecurvewithknots.htm */
export  class IfcRationalBSplineCurveWithKnots extends IfcBSplineCurveWithKnots {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS
  }
  private WeightsData_? : Array< number >

  public get WeightsData() : Array< number > {
    if ( this.WeightsData_ === void 0 ) {
      this.WeightsData_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 8 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 8

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
         let value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 )  {
            throw new Error( 'Value in STEP was incorrectly typed' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.WeightsData_ as Array< number >
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS
}
