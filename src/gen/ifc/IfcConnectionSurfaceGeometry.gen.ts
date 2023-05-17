
import { IfcConnectionGeometry } from "./index"
import { IfcFaceBasedSurfaceModel } from "./index"
import { IfcFaceSurface } from "./index"
import { IfcSurface } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionsurfacegeometry.htm */
export  class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY
  }
  private SurfaceOnRelatingElement_? : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface
  private SurfaceOnRelatedElement_? : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface | null

  public get SurfaceOnRelatingElement() : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface {
    if ( this.SurfaceOnRelatingElement_ === void 0 ) {
      this.SurfaceOnRelatingElement_ = (() => { 
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

      if ( !( value instanceof IfcFaceBasedSurfaceModel ) && !( value instanceof IfcFaceSurface ) && !( value instanceof IfcSurface ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcFaceBasedSurfaceModel | IfcFaceSurface | IfcSurface) })()
    }

    return this.SurfaceOnRelatingElement_ as IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface
  }

  public get SurfaceOnRelatedElement() : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface | null {
    if ( this.SurfaceOnRelatedElement_ === void 0 ) {
      this.SurfaceOnRelatedElement_ = (() => { 
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

      if ( !( value instanceof IfcFaceBasedSurfaceModel ) && !( value instanceof IfcFaceSurface ) && !( value instanceof IfcSurface ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcFaceBasedSurfaceModel | IfcFaceSurface | IfcSurface);
      } })()
    }

    return this.SurfaceOnRelatedElement_ as IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY
}
