
import { IfcCompositeCurveSegment } from "./index"
import { IfcParameterValue } from "./index"
import {
  stepExtractNumber,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreparametrisedcompositecurvesegment.htm */
export  class IfcReparametrisedCompositeCurveSegment extends IfcCompositeCurveSegment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT
  }
  private ParamLength_? : number

  public get ParamLength() : number {
    if ( this.ParamLength_ === void 0 ) {
      this.ParamLength_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractNumber( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.ParamLength_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT
}
