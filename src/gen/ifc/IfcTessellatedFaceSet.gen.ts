
import { IfcTessellatedItem } from "./index"
import { IfcCartesianPointList3D } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctessellatedfaceset.htm */
export abstract class IfcTessellatedFaceSet extends IfcTessellatedItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTESSELLATEDFACESET
  }
  private Coordinates_? : IfcCartesianPointList3D

  public get Coordinates() : IfcCartesianPointList3D {
    if ( this.Coordinates_ === void 0 ) {
      this.Coordinates_ = (() => { 
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
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

      if ( !( value instanceof IfcCartesianPointList3D ) )  {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value })()
    }

    return this.Coordinates_ as IfcCartesianPointList3D
  }

  public get Dim() : number {
    return 3;
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOLYGONALFACESET, EntityTypesIfc.IFCTRIANGULATEDFACESET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTESSELLATEDFACESET
}
