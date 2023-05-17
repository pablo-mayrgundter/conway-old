
import { IfcStructuralAction } from "./index"
import { IfcProjectedOrTrueLengthEnum, IfcProjectedOrTrueLengthEnumDeserializeStep } from "./index"
import { IfcStructuralCurveActivityTypeEnum, IfcStructuralCurveActivityTypeEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralcurveaction.htm */
export  class IfcStructuralCurveAction extends IfcStructuralAction {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSTRUCTURALCURVEACTION
  }
  private ProjectedOrTrue_? : IfcProjectedOrTrueLengthEnum | null
  private PredefinedType_? : IfcStructuralCurveActivityTypeEnum

  public get ProjectedOrTrue() : IfcProjectedOrTrueLengthEnum | null {
    if ( this.ProjectedOrTrue_ === void 0 ) {
      this.ProjectedOrTrue_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 10 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 10

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcProjectedOrTrueLengthEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.ProjectedOrTrue_ as IfcProjectedOrTrueLengthEnum | null
  }

  public get PredefinedType() : IfcStructuralCurveActivityTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 11 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 11

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcStructuralCurveActivityTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 )  {
        throw new Error( 'Value in STEP was incorrectly typed' )
      }

      return value })()
    }

    return this.PredefinedType_ as IfcStructuralCurveActivityTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSTRUCTURALCURVEACTION, EntityTypesIfc.IFCSTRUCTURALLINEARACTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSTRUCTURALCURVEACTION
}
