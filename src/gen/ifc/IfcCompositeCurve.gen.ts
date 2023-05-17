
import { IfcBoundedCurve } from "./index"
import { IfcCompositeCurveSegment } from "./index"
import { IfcLogical } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
  stepExtractArray,
  stepExtractLogical,
  SIZEOF,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompositecurve.htm */
export  class IfcCompositeCurve extends IfcBoundedCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPOSITECURVE
  }
  private Segments_? : Array<IfcCompositeCurveSegment>
  private SelfIntersect_? : boolean | null

  public get Segments() : Array<IfcCompositeCurveSegment> {
    if ( this.Segments_ === void 0 ) {
      this.Segments_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcCompositeCurveSegment> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcCompositeCurveSegment ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.Segments_ as Array<IfcCompositeCurveSegment>
  }

  public get SelfIntersect() : boolean | null {
    if ( this.SelfIntersect_ === void 0 ) {
      this.SelfIntersect_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractLogical( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.SelfIntersect_ as boolean | null
  }

  public get NSegments() : number {
    return SIZEOF(this?.Segments);
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCOMPOSITECURVE, EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE, EntityTypesIfc.IFCBOUNDARYCURVE, EntityTypesIfc.IFCOUTERBOUNDARYCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPOSITECURVE
}
