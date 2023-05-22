
import { IfcRelationship } from "./index"
import { IfcObjectDefinition } from "./index"
import { IfcPropertyDefinition } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociates.htm */
export abstract class IfcRelAssociates extends IfcRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSOCIATES
  }
  private RelatedObjects_? : Array<IfcObjectDefinition | IfcPropertyDefinition>

  public get RelatedObjects() : Array<IfcObjectDefinition | IfcPropertyDefinition> {
    if ( this.RelatedObjects_ === void 0 ) {
      this.RelatedObjects_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

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

    return this.RelatedObjects_ as Array<IfcObjectDefinition | IfcPropertyDefinition>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSOCIATESAPPROVAL, EntityTypesIfc.IFCRELASSOCIATESCLASSIFICATION, EntityTypesIfc.IFCRELASSOCIATESCONSTRAINT, EntityTypesIfc.IFCRELASSOCIATESDOCUMENT, EntityTypesIfc.IFCRELASSOCIATESLIBRARY, EntityTypesIfc.IFCRELASSOCIATESMATERIAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSOCIATES
}
