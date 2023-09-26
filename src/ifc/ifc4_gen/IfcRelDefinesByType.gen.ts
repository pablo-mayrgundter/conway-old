
import { IfcRelDefines } from "./index"
import { IfcObject } from "./index"
import { IfcTypeObject } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldefinesbytype.htm */
export  class IfcRelDefinesByType extends IfcRelDefines {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELDEFINESBYTYPE
  }
  private RelatedObjects_? : Array<IfcObject>
  private RelatingType_? : IfcTypeObject

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

  public get RelatingType() : IfcTypeObject {
    if ( this.RelatingType_ === void 0 ) {
      this.RelatingType_ = this.extractElement( 5, false, IfcTypeObject )
    }

    return this.RelatingType_ as IfcTypeObject
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELDEFINESBYTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELDEFINESBYTYPE
}
