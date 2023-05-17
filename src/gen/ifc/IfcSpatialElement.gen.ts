
import { IfcProduct } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcspatialelement.htm */
export abstract class IfcSpatialElement extends IfcProduct {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSPATIALELEMENT
  }
  private LongName_? : string | null

  public get LongName() : string | null {
    if ( this.LongName_ === void 0 ) {
      this.LongName_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 7 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 7

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.LongName_ as string | null
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSPATIALZONE, EntityTypesIfc.IFCEXTERNALSPATIALELEMENT, EntityTypesIfc.IFCBUILDING, EntityTypesIfc.IFCBUILDINGSTOREY, EntityTypesIfc.IFCSITE, EntityTypesIfc.IFCSPACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSPATIALELEMENT
}
