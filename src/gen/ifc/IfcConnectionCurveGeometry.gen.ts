
import { IfcConnectionGeometry } from "./index"
import { IfcBoundedCurve } from "./index"
import { IfcEdgeCurve } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectioncurvegeometry.htm */
export  class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY
  }
  private CurveOnRelatingElement_? : IfcBoundedCurve|IfcEdgeCurve
  private CurveOnRelatedElement_? : IfcBoundedCurve|IfcEdgeCurve | null

  public get CurveOnRelatingElement() : IfcBoundedCurve|IfcEdgeCurve {
    if ( this.CurveOnRelatingElement_ === void 0 ) {
      this.CurveOnRelatingElement_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoundedCurve ) && !( value instanceof IfcEdgeCurve ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcBoundedCurve | IfcEdgeCurve) })()
    }

    return this.CurveOnRelatingElement_ as IfcBoundedCurve|IfcEdgeCurve
  }

  public get CurveOnRelatedElement() : IfcBoundedCurve|IfcEdgeCurve | null {
    if ( this.CurveOnRelatedElement_ === void 0 ) {
      this.CurveOnRelatedElement_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoundedCurve ) && !( value instanceof IfcEdgeCurve ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoundedCurve | IfcEdgeCurve);
      } })()
    }

    return this.CurveOnRelatedElement_ as IfcBoundedCurve|IfcEdgeCurve | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY
}
