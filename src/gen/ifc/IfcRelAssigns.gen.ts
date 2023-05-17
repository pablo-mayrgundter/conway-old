
import { IfcRelationship } from "./index"
import { IfcObjectDefinition } from "./index"
import { IfcObjectTypeEnum, IfcObjectTypeEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassigns.htm */
export abstract class IfcRelAssigns extends IfcRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELASSIGNS
  }
  private RelatedObjects_? : Array<IfcObjectDefinition>
  private RelatedObjectsType_? : IfcObjectTypeEnum | null

  public get RelatedObjects() : Array<IfcObjectDefinition> {
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

      let value : Array<IfcObjectDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcObjectDefinition ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.RelatedObjects_ as Array<IfcObjectDefinition>
  }

  public get RelatedObjectsType() : IfcObjectTypeEnum | null {
    if ( this.RelatedObjectsType_ === void 0 ) {
      this.RelatedObjectsType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcObjectTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.RelatedObjectsType_ as IfcObjectTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELASSIGNSTOACTOR, EntityTypesIfc.IFCRELASSIGNSTOCONTROL, EntityTypesIfc.IFCRELASSIGNSTOGROUP, EntityTypesIfc.IFCRELASSIGNSTOPROCESS, EntityTypesIfc.IFCRELASSIGNSTOPRODUCT, EntityTypesIfc.IFCRELASSIGNSTORESOURCE, EntityTypesIfc.IFCRELASSIGNSTOGROUPBYFACTOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELASSIGNS
}
