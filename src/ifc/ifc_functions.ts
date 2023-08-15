
import {IfcBSplineCurve, IfcCompositeCurve, IfcConic, IfcIndexedPolyCurve, IfcLine, IfcOffsetCurve2D, IfcOffsetCurve3D, IfcPolyline, IfcSurface, IfcTrimmedCurve} from './ifc4_gen'
// import {IfcPcurve} from "../../gen/ifc/IfcPcurve.bldrs"
import {IfcDirection} from './ifc4_gen'
// import {IfcArcIndex} from "../../gen/ifc/IfcArcIndex.bldrs"
// import {IfcLineIndex} from "../../gen/ifc/IfcLineIndex.bldrs"
import {IfcParameterValue} from './ifc4_gen'
import {IfcUnitEnum} from './ifc4_gen'
import {IfcDimensionalExponents} from './ifc4_gen'
import {IfcColourSpecification} from './ifc4_gen'
import {IfcPreDefinedColour} from './ifc4_gen'
import {IfcExternallyDefinedHatchStyle} from './ifc4_gen'
import {IfcFillAreaStyleHatching} from './ifc4_gen'
import {IfcFillAreaStyleTiles} from './ifc4_gen'
import {IfcAxis2Placement2D} from './ifc4_gen'
import {IfcAxis2Placement3D} from './ifc4_gen'
import {IfcObjectPlacement} from './ifc4_gen'
import {IfcObjectTypeEnum} from './ifc4_gen'
import {IfcObjectDefinition} from './ifc4_gen'
import {IfcDerivedUnit} from './ifc4_gen'
import {IfcMonetaryUnit} from './ifc4_gen'
import {IfcNamedUnit} from './ifc4_gen'
import {IfcVector} from './ifc4_gen'
import {IfcDimensionCount} from './ifc4_gen'
import {IfcCurve} from './ifc4_gen'
// import {IfcRationalBSplineCurveWithKnots} from "../../gen/ifc/IfcRationalBSplineCurveWithKnots.bldrs"
import {IfcDerivedUnitElement} from './ifc4_gen'
import {IfcSIUnitName} from './ifc4_gen'
// import {IfcCompositeCurveOnSurface} from "../../gen/ifc/IfcCompositeCurveOnSurface.bldrs"
// import {IfcSurfaceCurve} from "../../gen/ifc/IfcSurfaceCurve.bldrs"
import {IfcEdgeLoop} from './ifc4_gen'
import {IfcLengthMeasure} from './ifc4_gen'
import {IfcMaterialLayerSet} from './ifc4_gen'
import {IfcPath} from './ifc4_gen'
// import {IfcCartesianPointList} from "../../gen/ifc/IfcCartesianPointList.bldrs"
import {IfcCartesianPoint} from './ifc4_gen'
import {IfcLabel} from './ifc4_gen'
import {IfcRepresentationItem} from './ifc4_gen'
// import {IfcRationalBSplineSurfaceWithKnots} from "../../gen/ifc/IfcRationalBSplineSurfaceWithKnots.bldrs"
import {IfcProfileDef} from './ifc4_gen'
import {IfcRelDefinesByProperties} from './ifc4_gen'
import {IfcProperty} from './ifc4_gen'
import {IfcPropertySetDefinition} from './ifc4_gen'
// import {IfcPropertyTemplate} from "../../gen/ifc/IfcPropertyTemplate.bldrs"
import {IfcPhysicalQuantity} from './ifc4_gen'
import {IfcCartesianPointList, IfcCartesianPointList2D, IfcCompositeCurveOnSurface, IfcPcurve, IfcSurfaceCurve} from './ifc4_gen'


/**
 *
 */
export function IfcPointListDim(pointList: IfcCartesianPointList) : number {
  if ( pointList instanceof IfcCartesianPointList2D ) {
    return 2
  }

  return 3
}

// export function IfcAssociatedSurface(arg: IfcPcurve) : IfcSurface {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcBaseAxis(dim: number, axis1: IfcDirection, axis2: IfcDirection, axis3: IfcDirection) : Array<IfcDirection> {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcBooleanChoose<T>(b: boolean, choice1: T, choice2: T) : T {
  return b ? choice1 : choice2
}

/**
 *
 */
export function IfcBuild2Axes(refDirection: IfcDirection | null) : Array<IfcDirection> {
  throw ['This function is not yet implemented.']
}

/**
 *
 */
export function IfcBuildAxes(axis: IfcDirection | null, refDirection: IfcDirection | null) : Array<IfcDirection> {
  throw 'This function is not yet implemented.'
}

// export function IfcConsecutiveSegments(segments: Array<IfcArcIndex|IfcLineIndex>) : boolean {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcConstraintsParamBSpline(degree: number, upKnots: number, upCp: number, knotMult: number, knots: IfcParameterValue) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcConvertDirectionInto2D(direction: IfcDirection) : IfcDirection {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCorrectDimensions(m: IfcUnitEnum, dim: IfcDimensionalExponents) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCorrectFillAreaStyle(styles: Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCorrectLocalPlacement(axisPlacement: IfcAxis2Placement2D|IfcAxis2Placement3D, relPlacement: IfcObjectPlacement) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCorrectObjectAssignment(constraint: IfcObjectTypeEnum, objects: Array<IfcObjectDefinition>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCorrectUnitAssignment(units: Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCrossProduct(arg1: IfcDirection, arg2: IfcDirection) : IfcVector {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcCurveDim(curve: IfcCurve) : number {
  if (curve instanceof IfcLine) {
    return curve.Pnt.Dim
  } 
  if (curve instanceof IfcConic ) {
    return curve.Position.Dim
  }
  if (curve instanceof IfcPolyline ) {
    return curve.Points[0].Dim
  }
  if (curve instanceof IfcTrimmedCurve) {
    return IfcCurveDim(curve.BasisCurve)
  }
  if (curve instanceof IfcCompositeCurve) {
    return curve.Segments[0].Dim
  }
  if (curve instanceof IfcBSplineCurve) {
    return curve.ControlPointsList[0].Dim
  }
  if (curve instanceof IfcOffsetCurve2D) {
    return 2
  }
  if (curve instanceof IfcOffsetCurve3D) {
    return 3
  }
  //NOTE: these seem to be from a newer schema version
  /*if (curve instanceof IfcOffsetCurveByDistances) {

  }
  if (curve instanceof IfcCurveSegment2D) {

  }
  if (curve instanceof IfcAlignmentCurve) {

  }*/
  if (curve instanceof IfcPcurve) {
    return 3
  }
  if (curve instanceof IfcIndexedPolyCurve) {
    return curve.Points.Dim
  }

  return 0
}

// export function IfcCurveWeightsPositive(b: IfcRationalBSplineCurveWithKnots) : boolean {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcDeriveDimensionalExponents(unitElements: IfcDerivedUnitElement[]) : IfcDimensionalExponents {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcDimensionsForSiUnit(n: IfcSIUnitName) : IfcDimensionalExponents {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcDotProduct(arg1: IfcDirection, arg2: IfcDirection) : number {
  let result = 0

  for ( let argIndex = 0, end = Math.min( arg1.Dim, arg2.Dim ); argIndex < end; ++argIndex ) {
    result += arg1.DirectionRatios[argIndex] * arg2.DirectionRatios[argIndex]
  }

  return result
}

/**
 *
 */
export function IfcFirstProjAxis(zAxis: IfcDirection, arg: IfcDirection) : IfcDirection {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcGetBasisSurface(c: IfcCompositeCurveOnSurface|IfcPcurve|IfcSurfaceCurve) : Array<IfcSurface> {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcListToArray<T>(lis: Array<T>, low: number, u: number) : Array<T> {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcLoopHeadToTail(aLoop: IfcEdgeLoop) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcMakeArrayOfArray<T>(lis: Array<Array<T>>, low1: number, u1: number, low2: number, u2: number) : Array<Array<T>> {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcMlsTotalThickness(layerSet: IfcMaterialLayerSet) : number {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcNormalise(arg: IfcDirection|IfcVector) : IfcDirection|IfcVector {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcOrthogonalComplement(vec: IfcDirection) : IfcDirection {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcPathHeadToTail(aPath: IfcPath) : boolean {
  throw 'This function is not yet implemented.'
}

// export function IfcPointListDim(pointList: IfcCartesianPointList) : IfcDimensionCount {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcSameAxis2Placement(ap1: IfcAxis2Placement2D|IfcAxis2Placement3D, ap2: IfcAxis2Placement2D|IfcAxis2Placement3D, epsilon: number) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcSameCartesianPoint(cp1: IfcCartesianPoint, cp2: IfcCartesianPoint, epsilon: number) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcSameDirection(dir1: IfcDirection, dir2: IfcDirection, epsilon: number) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcSameValidPrecision(epsilon1: number, epsilon2: number) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcSameValue(value1: number, value2: number, epsilon: number) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcScalarTimesVector(scalar: number, vec: IfcDirection|IfcVector) : IfcVector {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcSecondProjAxis(zAxis: IfcDirection, xAxis: IfcDirection, arg: IfcDirection) : IfcDirection {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcShapeRepresentationTypes(repType: IfcLabel, items: IfcRepresentationItem) : boolean {
  throw 'This function is not yet implemented.'
}

// export function IfcSurfaceWeightsPositive(b: IfcRationalBSplineSurfaceWithKnots) : boolean {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcTaperedSweptAreaProfiles(startArea: IfcProfileDef, endArea: IfcProfileDef) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcTopologyRepresentationTypes(repType: IfcLabel, items: IfcRepresentationItem) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcUniqueDefinitionNames(relations: Array<IfcRelDefinesByProperties>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcUniquePropertyName(properties: Array<IfcProperty>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcUniquePropertySetNames(properties: Array<IfcPropertySetDefinition>) : boolean {
  throw 'This function is not yet implemented.'
}

// export function IfcUniquePropertyTemplateNames(properties: Array<IfcPropertyTemplate>) : boolean {
//     throw "This function is not yet implemented."
// }

/**
 *
 */
export function IfcUniqueQuantityNames(properties: Array<IfcPhysicalQuantity>) : boolean {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcVectorDifference(arg1: IfcDirection|IfcVector, arg2: IfcDirection|IfcVector) : IfcVector {
  throw 'This function is not yet implemented.'
}

/**
 *
 */
export function IfcVectorSum(arg1: IfcDirection|IfcVector, arg2: IfcDirection|IfcVector) : IfcVector {
  throw 'This function is not yet implemented.'
}
