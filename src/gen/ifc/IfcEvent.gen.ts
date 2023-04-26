
import { IfcProcess } from "./index"
import { IfcEventTypeEnum, IfcEventTypeEnumDeserializeStep } from "./index"
import { IfcEventTriggerTypeEnum, IfcEventTriggerTypeEnumDeserializeStep } from "./index"
import { IfcLabel } from "./index"
import { IfcEventTime } from "./index"

/* This is generated code, don't modify */
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
  stepExtractArray,
  stepExtractLogical,
  NVL,
  HIINDEX,
  SIZEOF
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

import {
  IfcBaseAxis,
  IfcBooleanChoose,
  IfcBuild2Axes,
  IfcBuildAxes,
  IfcConstraintsParamBSpline,
  IfcConvertDirectionInto2D,
  IfcCorrectDimensions,
  IfcCorrectFillAreaStyle,
  IfcCorrectLocalPlacement,
  IfcCorrectObjectAssignment,
  IfcCorrectUnitAssignment,
  IfcCrossProduct,
  IfcCurveDim,
  IfcDeriveDimensionalExponents,
  IfcDimensionsForSiUnit,
  IfcDotProduct,
  IfcFirstProjAxis,
  IfcListToArray,
  IfcLoopHeadToTail,
  IfcMakeArrayOfArray,
  IfcMlsTotalThickness,
  IfcNormalise,
  IfcOrthogonalComplement,
  IfcPathHeadToTail,
  IfcSameAxis2Placement,
  IfcSameCartesianPoint,
  IfcSameDirection,
  IfcSameValidPrecision,
  IfcSameValue,
  IfcScalarTimesVector,
  IfcSecondProjAxis,
  IfcShapeRepresentationTypes,
  IfcTaperedSweptAreaProfiles,
  IfcTopologyRepresentationTypes,
  IfcUniqueDefinitionNames,
  IfcUniquePropertyName,
  IfcUniquePropertySetNames,
  IfcUniqueQuantityNames,
  IfcVectorDifference,
  IfcVectorSum,
  IfcPointListDim,
  IfcGetBasisSurface
} from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcevent.htm */
export  class IfcEvent extends IfcProcess {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEVENT
  }
  private PredefinedType_? : IfcEventTypeEnum | null
  private EventTriggerType_? : IfcEventTriggerTypeEnum | null
  private UserDefinedEventTriggerType_? : string | null
  private EventOccurenceTime_? : IfcEventTime | null

  public get PredefinedType() : IfcEventTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 7 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 7

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcEventTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.PredefinedType_ as IfcEventTypeEnum | null
  }

  public get EventTriggerType() : IfcEventTriggerTypeEnum | null {
    if ( this.EventTriggerType_ === void 0 ) {
      this.EventTriggerType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 8 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 8

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let value = IfcEventTriggerTypeEnumDeserializeStep( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.EventTriggerType_ as IfcEventTriggerTypeEnum | null
  }

  public get UserDefinedEventTriggerType() : string | null {
    if ( this.UserDefinedEventTriggerType_ === void 0 ) {
      this.UserDefinedEventTriggerType_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 9 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 9

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

    return this.UserDefinedEventTriggerType_ as string | null
  }

  public get EventOccurenceTime() : IfcEventTime | null {
    if ( this.EventOccurenceTime_ === void 0 ) {
      this.EventOccurenceTime_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 10 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 10

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcEventTime ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.EventOccurenceTime_ as IfcEventTime | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCEVENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCEVENT
}
