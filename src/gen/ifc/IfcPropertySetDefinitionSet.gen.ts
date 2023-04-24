
/* This is generated code, don't alter */
import { IfcPropertySetDefinition } from "./index"
import EntityTypesIfc from "./entity_types_ifc.gen"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {
  stepExtractBoolean,
  stepExtractEnum,
  stepExtractString,
  stepExtractOptional,
  stepExtractBinary,
  stepExtractReference,
  stepExtractNumber,
  stepExtractInlineElemement,
  stepExtractArray
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertysetdefinitionset.htm */
export class IfcPropertySetDefinitionSet extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET
  }

  private Value_? : Array<IfcPropertySetDefinition>;

  public get Value() : Array<IfcPropertySetDefinition> {
    if ( this.Value_ === void 0 ) {
      this.Value_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value : Array<IfcPropertySetDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
           let expressID = stepExtractReference( buffer, cursor, endCursor );
           let value =
             expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
             this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )
    
          if ( !( value instanceof IfcPropertySetDefinition ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.Value_ as Array<IfcPropertySetDefinition>
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET
}
