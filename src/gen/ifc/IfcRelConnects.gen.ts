
import { IfcRelationship } from "./index"

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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnects.htm */
export abstract class IfcRelConnects extends IfcRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELCONNECTS
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELCONNECTSELEMENTS, EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT, EntityTypesIfc.IFCRELCONNECTSPORTS, EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY, EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER, EntityTypesIfc.IFCRELCONTAINEDINSPATIALSTRUCTURE, EntityTypesIfc.IFCRELCOVERSBLDGELEMENTS, EntityTypesIfc.IFCRELCOVERSSPACES, EntityTypesIfc.IFCRELFILLSELEMENT, EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS, EntityTypesIfc.IFCRELINTERFERESELEMENTS, EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE, EntityTypesIfc.IFCRELSEQUENCE, EntityTypesIfc.IFCRELSERVICESBUILDINGS, EntityTypesIfc.IFCRELSPACEBOUNDARY, EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS, EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS, EntityTypesIfc.IFCRELCONNECTSWITHECCENTRICITY, EntityTypesIfc.IFCRELSPACEBOUNDARY1STLEVEL, EntityTypesIfc.IFCRELSPACEBOUNDARY2NDLEVEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELCONNECTS
}
