
import { IfcRelDefines } from "./index"
import { IfcObject } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldefinesbyobject.htm */
export  class IfcRelDefinesByObject extends IfcRelDefines {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELDEFINESBYOBJECT
  }
  private RelatedObjects_? : Array<IfcObject>
  private RelatingObject_? : IfcObject

  public get RelatedObjects() : Array<IfcObject> {
    if ( this.RelatedObjects_ === void 0 ) {
      this.RelatedObjects_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      let value : Array<IfcObject> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcObject ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedObjects_ as Array<IfcObject>
  }

  public get RelatingObject() : IfcObject {
    if ( this.RelatingObject_ === void 0 ) {
      this.RelatingObject_ = this.extractElement( 5, false, IfcObject )
    }

    return this.RelatingObject_ as IfcObject
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELDEFINESBYOBJECT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELDEFINESBYOBJECT
}
