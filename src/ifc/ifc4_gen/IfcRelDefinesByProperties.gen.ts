
import { IfcRelDefines } from "./index"
import { IfcObjectDefinition } from "./index"
import { IfcPropertySetDefinition } from "./index"
import { IfcPropertySetDefinitionSet } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldefinesbyproperties.htm */
export  class IfcRelDefinesByProperties extends IfcRelDefines {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELDEFINESBYPROPERTIES
  }
  private RelatedObjects_? : Array<IfcObjectDefinition>
  private RelatingPropertyDefinition_? : IfcPropertySetDefinition | IfcPropertySetDefinitionSet

  public get RelatedObjects() : Array<IfcObjectDefinition> {
    if ( this.RelatedObjects_ === void 0 ) {
      this.RelatedObjects_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

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

  public get RelatingPropertyDefinition() : IfcPropertySetDefinition | IfcPropertySetDefinitionSet {
    if ( this.RelatingPropertyDefinition_ === void 0 ) {
      this.RelatingPropertyDefinition_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcPropertySetDefinition ) && !( value instanceof IfcPropertySetDefinitionSet ) ) {
        return ( void 0 )
      }
      return value as (IfcPropertySetDefinition | IfcPropertySetDefinitionSet)
}, false )
    }

    return this.RelatingPropertyDefinition_ as IfcPropertySetDefinition | IfcPropertySetDefinitionSet
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELDEFINESBYPROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELDEFINESBYPROPERTIES
}
