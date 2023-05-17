
import { IfcRelationship } from "./index"
import { IfcObjectDefinition } from "./index"
import { IfcPropertyDefinition } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
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
  private RelatedObjects_? : Array<IfcObjectDefinition|IfcPropertyDefinition>

  public get RelatedObjects() : Array<IfcObjectDefinition|IfcPropertyDefinition> {
    if ( this.RelatedObjects_ === void 0 ) {
      this.RelatedObjects_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcObjectDefinition|IfcPropertyDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
          let expressID = stepExtractReference( buffer, cursor, endCursor );
          let value : StepEntityBase< EntityTypesIfc > | undefined =
            expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
            (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))
    
          if ( !( value instanceof IfcObjectDefinition ) && !( value instanceof IfcPropertyDefinition ) ) {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value as (IfcObjectDefinition | IfcPropertyDefinition)
        })() )
      }

return value })()
    }

    return this.RelatedObjects_ as Array<IfcObjectDefinition|IfcPropertyDefinition>
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
