
import { IfcRepresentationItem } from "./index"

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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricrepresentationitem.htm */
export abstract class IfcGeometricRepresentationItem extends IfcRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCANNOTATIONFILLAREA, EntityTypesIfc.IFCBOOLEANRESULT, EntityTypesIfc.IFCBOUNDINGBOX, EntityTypesIfc.IFCCOMPOSITECURVESEGMENT, EntityTypesIfc.IFCDIRECTION, EntityTypesIfc.IFCFACEBASEDSURFACEMODEL, EntityTypesIfc.IFCFILLAREASTYLEHATCHING, EntityTypesIfc.IFCFILLAREASTYLETILES, EntityTypesIfc.IFCGEOMETRICSET, EntityTypesIfc.IFCHALFSPACESOLID, EntityTypesIfc.IFCPLANAREXTENT, EntityTypesIfc.IFCSECTIONEDSPINE, EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL, EntityTypesIfc.IFCTEXTLITERAL, EntityTypesIfc.IFCVECTOR, EntityTypesIfc.IFCBOOLEANCLIPPINGRESULT, EntityTypesIfc.IFCCARTESIANPOINTLIST2D, EntityTypesIfc.IFCCARTESIANPOINTLIST3D, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM, EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT, EntityTypesIfc.IFCBLOCK, EntityTypesIfc.IFCRECTANGULARPYRAMID, EntityTypesIfc.IFCRIGHTCIRCULARCONE, EntityTypesIfc.IFCRIGHTCIRCULARCYLINDER, EntityTypesIfc.IFCSPHERE, EntityTypesIfc.IFCLINE, EntityTypesIfc.IFCOFFSETCURVE2D, EntityTypesIfc.IFCOFFSETCURVE3D, EntityTypesIfc.IFCPCURVE, EntityTypesIfc.IFCSURFACECURVE, EntityTypesIfc.IFCCOMPOSITECURVE, EntityTypesIfc.IFCINDEXEDPOLYCURVE, EntityTypesIfc.IFCPOLYLINE, EntityTypesIfc.IFCTRIMMEDCURVE, EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCCOMPOSITECURVEONSURFACE, EntityTypesIfc.IFCBOUNDARYCURVE, EntityTypesIfc.IFCOUTERBOUNDARYCURVE, EntityTypesIfc.IFCCIRCLE, EntityTypesIfc.IFCELLIPSE, EntityTypesIfc.IFCINTERSECTIONCURVE, EntityTypesIfc.IFCSEAMCURVE, EntityTypesIfc.IFCGEOMETRICCURVESET, EntityTypesIfc.IFCBOXEDHALFSPACE, EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE, EntityTypesIfc.IFCLIGHTSOURCEAMBIENT, EntityTypesIfc.IFCLIGHTSOURCEDIRECTIONAL, EntityTypesIfc.IFCLIGHTSOURCEGONIOMETRIC, EntityTypesIfc.IFCLIGHTSOURCEPOSITIONAL, EntityTypesIfc.IFCLIGHTSOURCESPOT, EntityTypesIfc.IFCAXIS1PLACEMENT, EntityTypesIfc.IFCAXIS2PLACEMENT2D, EntityTypesIfc.IFCAXIS2PLACEMENT3D, EntityTypesIfc.IFCPLANARBOX, EntityTypesIfc.IFCCARTESIANPOINT, EntityTypesIfc.IFCPOINTONCURVE, EntityTypesIfc.IFCPOINTONSURFACE, EntityTypesIfc.IFCCSGSOLID, EntityTypesIfc.IFCSWEPTDISKSOLID, EntityTypesIfc.IFCADVANCEDBREP, EntityTypesIfc.IFCFACETEDBREP, EntityTypesIfc.IFCADVANCEDBREPWITHVOIDS, EntityTypesIfc.IFCFACETEDBREPWITHVOIDS, EntityTypesIfc.IFCEXTRUDEDAREASOLID, EntityTypesIfc.IFCFIXEDREFERENCESWEPTAREASOLID, EntityTypesIfc.IFCREVOLVEDAREASOLID, EntityTypesIfc.IFCSURFACECURVESWEPTAREASOLID, EntityTypesIfc.IFCEXTRUDEDAREASOLIDTAPERED, EntityTypesIfc.IFCREVOLVEDAREASOLIDTAPERED, EntityTypesIfc.IFCSWEPTDISKSOLIDPOLYGONAL, EntityTypesIfc.IFCCURVEBOUNDEDPLANE, EntityTypesIfc.IFCCURVEBOUNDEDSURFACE, EntityTypesIfc.IFCRECTANGULARTRIMMEDSURFACE, EntityTypesIfc.IFCBSPLINESURFACEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINESURFACEWITHKNOTS, EntityTypesIfc.IFCCYLINDRICALSURFACE, EntityTypesIfc.IFCPLANE, EntityTypesIfc.IFCSPHERICALSURFACE, EntityTypesIfc.IFCTOROIDALSURFACE, EntityTypesIfc.IFCSURFACEOFLINEAREXTRUSION, EntityTypesIfc.IFCSURFACEOFREVOLUTION, EntityTypesIfc.IFCINDEXEDPOLYGONALFACE, EntityTypesIfc.IFCINDEXEDPOLYGONALFACEWITHVOIDS, EntityTypesIfc.IFCPOLYGONALFACESET, EntityTypesIfc.IFCTRIANGULATEDFACESET, EntityTypesIfc.IFCTEXTLITERALWITHEXTENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM
}
