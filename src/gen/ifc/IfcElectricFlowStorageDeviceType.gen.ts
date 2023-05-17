
import { IfcFlowStorageDeviceType } from "./index"
import { IfcElectricFlowStorageDeviceTypeEnum, IfcElectricFlowStorageDeviceTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelectricflowstoragedevicetype.htm */
export  class IfcElectricFlowStorageDeviceType extends IfcFlowStorageDeviceType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE
  }
  private PredefinedType_? : IfcElectricFlowStorageDeviceTypeEnum

  public get PredefinedType() : IfcElectricFlowStorageDeviceTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 9 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 9

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcElectricFlowStorageDeviceTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.PredefinedType_ as IfcElectricFlowStorageDeviceTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE
}
