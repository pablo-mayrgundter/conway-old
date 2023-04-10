
import { IfcRepresentationItem } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricrepresentationitem.htm */
export abstract class IfcGeometricRepresentationItem extends IfcRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCANNOTATIONFILLAREA, EntityTypesIfc.IFCBOOLEANRESULT, EntityTypesIfc.IFCBOUNDINGBOX, EntityTypesIfc.IFCCOMPOSITECURVESEGMENT, EntityTypesIfc.IFCDIRECTION, EntityTypesIfc.IFCFACEBASEDSURFACEMODEL, EntityTypesIfc.IFCFILLAREASTYLEHATCHING, EntityTypesIfc.IFCFILLAREASTYLETILES, EntityTypesIfc.IFCGEOMETRICSET, EntityTypesIfc.IFCHALFSPACESOLID, EntityTypesIfc.IFCPLANAREXTENT, EntityTypesIfc.IFCSECTIONEDSPINE, EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL, EntityTypesIfc.IFCTEXTLITERAL, EntityTypesIfc.IFCVECTOR, EntityTypesIfc.IFCBOOLEANCLIPPINGRESULT, EntityTypesIfc.IFCCARTESIANPOINTLIST2D, EntityTypesIfc.IFCCARTESIANPOINTLIST3D, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2D, EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D, EntityTypesIfc.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT, EntityTypesIfc.IFCBLOCK, EntityTypesIfc.IFCRECTANGULARPYRAMID, EntityTypesIfc.IFCRIGHTCIRCULARCONE, EntityTypesIfc.IFCRIGHTCIRCULARCYLINDER, EntityTypesIfc.IFCSPHERE, EntityTypesIfc.IFCLINE, EntityTypesIfc.IFCOFFSETCURVE2D, EntityTypesIfc.IFCOFFSETCURVE3D, EntityTypesIfc.IFCPCURVE, EntityTypesIfc.IFCSURFACECURVE, EntityTypesIfc.IFCGEOMETRICCURVESET, EntityTypesIfc.IFCBOXEDHALFSPACE, EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE, EntityTypesIfc.IFCLIGHTSOURCEAMBIENT, EntityTypesIfc.IFCLIGHTSOURCEDIRECTIONAL, EntityTypesIfc.IFCLIGHTSOURCEGONIOMETRIC, EntityTypesIfc.IFCLIGHTSOURCEPOSITIONAL, EntityTypesIfc.IFCAXIS1PLACEMENT, EntityTypesIfc.IFCAXIS2PLACEMENT2D, EntityTypesIfc.IFCAXIS2PLACEMENT3D, EntityTypesIfc.IFCPLANARBOX, EntityTypesIfc.IFCCARTESIANPOINT, EntityTypesIfc.IFCPOINTONCURVE, EntityTypesIfc.IFCPOINTONSURFACE, EntityTypesIfc.IFCCSGSOLID, EntityTypesIfc.IFCSWEPTDISKSOLID, EntityTypesIfc.IFCINDEXEDPOLYGONALFACE, EntityTypesIfc.IFCTEXTLITERALWITHEXTENT ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCGEOMETRICREPRESENTATIONITEM;
}
