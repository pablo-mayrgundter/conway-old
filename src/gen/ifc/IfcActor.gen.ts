
import { IfcObject } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"

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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcactor.htm */
export  class IfcActor extends IfcObject {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCACTOR
  }
  private TheActor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization

  public get TheActor() : IfcOrganization|IfcPerson|IfcPersonAndOrganization {
    if ( this.TheActor_ === void 0 ) {
      this.TheActor_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      return value as (IfcOrganization | IfcPerson | IfcPersonAndOrganization) })()
    }

    return this.TheActor_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCACTOR, EntityTypesIfc.IFCOCCUPANT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCACTOR
}
