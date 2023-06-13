
import { IfcLoop } from "./index"
import { IfcOrientedEdge } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractArray,
  SIZEOF,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcedgeloop.htm */
export  class IfcEdgeLoop extends IfcLoop {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEDGELOOP
  }
  private EdgeList_? : Array<IfcOrientedEdge>

  public get EdgeList() : Array<IfcOrientedEdge> {
    if ( this.EdgeList_ === void 0 ) {
      this.EdgeList_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcOrientedEdge> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcOrientedEdge ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
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
