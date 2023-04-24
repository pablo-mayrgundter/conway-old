

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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertyabstraction.htm */
export abstract class IfcPropertyAbstraction extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROPERTYABSTRACTION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPROPERTYENUMERATION, EntityTypesIfc.IFCMATERIALPROPERTIES, EntityTypesIfc.IFCPROFILEPROPERTIES, EntityTypesIfc.IFCREINFORCEMENTBARPROPERTIES, EntityTypesIfc.IFCSECTIONPROPERTIES, EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES, EntityTypesIfc.IFCCOMPLEXPROPERTY, EntityTypesIfc.IFCPROPERTYBOUNDEDVALUE, EntityTypesIfc.IFCPROPERTYENUMERATEDVALUE, EntityTypesIfc.IFCPROPERTYLISTVALUE, EntityTypesIfc.IFCPROPERTYREFERENCEVALUE, EntityTypesIfc.IFCPROPERTYSINGLEVALUE, EntityTypesIfc.IFCPROPERTYTABLEVALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROPERTYABSTRACTION
}
