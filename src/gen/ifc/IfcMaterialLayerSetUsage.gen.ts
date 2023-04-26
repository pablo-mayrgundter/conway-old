
import { IfcMaterialUsageDefinition } from "./index"
import { IfcMaterialLayerSet } from "./index"
import { IfcLayerSetDirectionEnum, IfcLayerSetDirectionEnumDeserializeStep } from "./index"
import { IfcDirectionSenseEnum, IfcDirectionSenseEnumDeserializeStep } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import {
  stepExtractOptional,
  stepExtractReference,
  stepExtractNumber,
  stepExtractInlineElemement,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmateriallayersetusage.htm */
export  class IfcMaterialLayerSetUsage extends IfcMaterialUsageDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALLAYERSETUSAGE
  }
  private ForLayerSet_? : IfcMaterialLayerSet
  private LayerSetDirection_? : IfcLayerSetDirectionEnum
  private DirectionSense_? : IfcDirectionSenseEnum
  private OffsetFromReferenceLine_? : number
  private ReferenceExtent_? : number | null

  public get ForLayerSet() : IfcMaterialLayerSet {
    if ( this.ForLayerSet_ === void 0 ) {
      this.ForLayerSet_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 0 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 0

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

      if ( !( value instanceof IfcMaterialLayerSet ) )  {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value })()
    }

    return this.ForLayerSet_ as IfcMaterialLayerSet
  }

  public get LayerSetDirection() : IfcLayerSetDirectionEnum {
    if ( this.LayerSetDirection_ === void 0 ) {
      this.LayerSetDirection_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcLayerSetDirectionEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.LayerSetDirection_ as IfcLayerSetDirectionEnum
  }

  public get DirectionSense() : IfcDirectionSenseEnum {
    if ( this.DirectionSense_ === void 0 ) {
      this.DirectionSense_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcDirectionSenseEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.DirectionSense_ as IfcDirectionSenseEnum
  }

  public get OffsetFromReferenceLine() : number {
    if ( this.OffsetFromReferenceLine_ === void 0 ) {
      this.OffsetFromReferenceLine_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractNumber( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.OffsetFromReferenceLine_ as number
  }

  public get ReferenceExtent() : number | null {
    if ( this.ReferenceExtent_ === void 0 ) {
      this.ReferenceExtent_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractNumber( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ReferenceExtent_ as number | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALLAYERSETUSAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALLAYERSETUSAGE
}
