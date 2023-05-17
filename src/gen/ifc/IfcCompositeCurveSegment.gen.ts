
import { IfcGeometricRepresentationItem } from "./index"
import { IfcTransitionCode, IfcTransitionCodeDeserializeStep } from "./index"
import { IfcBoolean } from "./index"
import { IfcCurve } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractBoolean,
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompositecurvesegment.htm */
export  class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPOSITECURVESEGMENT
  }
  private Transition_? : IfcTransitionCode
  private SameSense_? : boolean
  private ParentCurve_? : IfcCurve

  public get Transition() : IfcTransitionCode {
    if ( this.Transition_ === void 0 ) {
      this.Transition_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcTransitionCodeDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.Transition_ as IfcTransitionCode
  }

  public get SameSense() : boolean {
    if ( this.SameSense_ === void 0 ) {
      this.SameSense_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractBoolean( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.SameSense_ as boolean
  }

  public get ParentCurve() : IfcCurve {
    if ( this.ParentCurve_ === void 0 ) {
      this.ParentCurve_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

      if ( !( value instanceof IfcCurve ) )  {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value })()
    }

    return this.ParentCurve_ as IfcCurve
  }

  public get Dim() : number {
    return this?.ParentCurve?.Dim;
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMPOSITECURVESEGMENT, EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPOSITECURVESEGMENT
}
