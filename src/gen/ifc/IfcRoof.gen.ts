
import { IfcBuildingElement } from "./index"
import { IfcRoofTypeEnum, IfcRoofTypeEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcroof.htm */
export  class IfcRoof extends IfcBuildingElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCROOF
  }
  private PredefinedType_? : IfcRoofTypeEnum | null

  public get PredefinedType() : IfcRoofTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 8 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 8

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcRoofTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.PredefinedType_ as IfcRoofTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCROOF ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCROOF
}
