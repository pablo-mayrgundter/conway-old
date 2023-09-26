
import { IfcRelationship } from "./index"
import { IfcContext } from "./index"
import { IfcObjectDefinition } from "./index"
import { IfcPropertyDefinition } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldeclares.htm */
export  class IfcRelDeclares extends IfcRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELDECLARES
  }
  private RelatingContext_? : IfcContext
  private RelatedDefinitions_? : Array<IfcObjectDefinition | IfcPropertyDefinition>

  public get RelatingContext() : IfcContext {
    if ( this.RelatingContext_ === void 0 ) {
      this.RelatingContext_ = this.extractElement( 4, false, IfcContext )
    }

    return this.RelatingContext_ as IfcContext
  }

  public get RelatedDefinitions() : Array<IfcObjectDefinition | IfcPropertyDefinition> {
    if ( this.RelatedDefinitions_ === void 0 ) {
      this.RelatedDefinitions_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcObjectDefinition | IfcPropertyDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcObjectDefinition ) && !( value instanceof IfcPropertyDefinition ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcObjectDefinition | IfcPropertyDefinition)})() )
      }
      return value }, false )
    }

    return this.RelatedDefinitions_ as Array<IfcObjectDefinition | IfcPropertyDefinition>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELDECLARES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELDECLARES
}
