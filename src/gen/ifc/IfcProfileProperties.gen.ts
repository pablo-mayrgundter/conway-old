
import { IfcExtendedProperties } from "./index"
import { IfcProfileDef } from "./index"
import {
  stepExtractReference,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcprofileproperties.htm */
export  class IfcProfileProperties extends IfcExtendedProperties {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROFILEPROPERTIES
  }
  private ProfileDefinition_? : IfcProfileDef

  public get ProfileDefinition() : IfcProfileDef {
    if ( this.ProfileDefinition_ === void 0 ) {
      this.ProfileDefinition_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

      if ( !( value instanceof IfcProfileDef ) )  {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value })()
    }

    return this.ProfileDefinition_ as IfcProfileDef
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPROFILEPROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROFILEPROPERTIES
}
