
import { IfcTopologicalRepresentationItem } from "./index"
import { IfcFace } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectedfaceset.htm */
export  class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONNECTEDFACESET
  }
  private CfsFaces_? : Array<IfcFace>

  public get CfsFaces() : Array<IfcFace> {
    if ( this.CfsFaces_ === void 0 ) {
      this.CfsFaces_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcFace> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcFace ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.CfsFaces_ as Array<IfcFace>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCONNECTEDFACESET, EntityTypesIfc.IFCCLOSEDSHELL, EntityTypesIfc.IFCOPENSHELL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONNECTEDFACESET
}
