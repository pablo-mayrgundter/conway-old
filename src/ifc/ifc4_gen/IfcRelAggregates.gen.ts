
import { IfcRelDecomposes } from "./index"
import { IfcObjectDefinition } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelaggregates.htm */
export  class IfcRelAggregates extends IfcRelDecomposes {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELAGGREGATES
  }
  private RelatingObject_? : IfcObjectDefinition
  private RelatedObjects_? : Array<IfcObjectDefinition>

  public get RelatingObject() : IfcObjectDefinition {
    if ( this.RelatingObject_ === void 0 ) {
      this.RelatingObject_ = this.extractElement( 4, false, IfcObjectDefinition )
    }

    return this.RelatingObject_ as IfcObjectDefinition
  }

  public get RelatedObjects() : Array<IfcObjectDefinition> {
    if ( this.RelatedObjects_ === void 0 ) {
      this.RelatedObjects_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcObjectDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcObjectDefinition ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedObjects_ as Array<IfcObjectDefinition>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELAGGREGATES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELAGGREGATES
}
