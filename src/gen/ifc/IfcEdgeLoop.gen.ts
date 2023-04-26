
import { IfcLoop } from "./index"
import { IfcOrientedEdge } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
  stepExtractArray,
  SIZEOF,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcedgeloop.htm */
export  class IfcEdgeLoop extends IfcLoop {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEDGELOOP
  }
  private EdgeList_? : Array<IfcOrientedEdge>

  public get EdgeList() : Array<IfcOrientedEdge> {
    if ( this.EdgeList_ === void 0 ) {
      this.EdgeList_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcOrientedEdge> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcOrientedEdge ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.EdgeList_ as Array<IfcOrientedEdge>
  }

  public get Ne() : number {
    return SIZEOF(this?.EdgeList);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCEDGELOOP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCEDGELOOP
}
