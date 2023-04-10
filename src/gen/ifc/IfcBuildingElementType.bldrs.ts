
import { IfcElementType } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuildingelementtype.htm */
export abstract class IfcBuildingElementType extends IfcElementType 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBUILDINGELEMENTTYPE;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCBEAMTYPE, EntityTypesIfc.IFCBUILDINGELEMENTPROXYTYPE, EntityTypesIfc.IFCCHIMNEYTYPE, EntityTypesIfc.IFCCOLUMNTYPE, EntityTypesIfc.IFCCOVERINGTYPE, EntityTypesIfc.IFCCURTAINWALLTYPE, EntityTypesIfc.IFCDOORTYPE, EntityTypesIfc.IFCFOOTINGTYPE, EntityTypesIfc.IFCMEMBERTYPE, EntityTypesIfc.IFCPILETYPE, EntityTypesIfc.IFCPLATETYPE, EntityTypesIfc.IFCRAILINGTYPE, EntityTypesIfc.IFCRAMPFLIGHTTYPE, EntityTypesIfc.IFCRAMPTYPE, EntityTypesIfc.IFCROOFTYPE, EntityTypesIfc.IFCSHADINGDEVICETYPE, EntityTypesIfc.IFCSLABTYPE, EntityTypesIfc.IFCSTAIRFLIGHTTYPE, EntityTypesIfc.IFCSTAIRTYPE, EntityTypesIfc.IFCWALLTYPE, EntityTypesIfc.IFCWINDOWTYPE ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCBUILDINGELEMENTTYPE;
}
