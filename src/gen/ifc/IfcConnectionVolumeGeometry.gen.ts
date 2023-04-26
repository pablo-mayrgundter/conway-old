
import { IfcConnectionGeometry } from "./index"
import { IfcClosedShell } from "./index"
import { IfcSolidModel } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionvolumegeometry.htm */
export  class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY
  }
  private VolumeOnRelatingElement_? : IfcClosedShell|IfcSolidModel
  private VolumeOnRelatedElement_? : IfcClosedShell|IfcSolidModel | null

  public get VolumeOnRelatingElement() : IfcClosedShell|IfcSolidModel {
    if ( this.VolumeOnRelatingElement_ === void 0 ) {
      this.VolumeOnRelatingElement_ = (() => { 
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

      if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcSolidModel ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcClosedShell | IfcSolidModel) })()
    }

    return this.VolumeOnRelatingElement_ as IfcClosedShell|IfcSolidModel
  }

  public get VolumeOnRelatedElement() : IfcClosedShell|IfcSolidModel | null {
    if ( this.VolumeOnRelatedElement_ === void 0 ) {
      this.VolumeOnRelatedElement_ = (() => { 
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

      if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcSolidModel ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcClosedShell | IfcSolidModel);
      } })()
    }

    return this.VolumeOnRelatedElement_ as IfcClosedShell|IfcSolidModel | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTIONVOLUMEGEOMETRY
}
