
import { IfcElement } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuildingelement.htm */
export abstract class IfcBuildingElement extends IfcElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBUILDINGELEMENT;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCBEAM, EntityTypesIfc.IFCBUILDINGELEMENTPROXY, EntityTypesIfc.IFCCHIMNEY, EntityTypesIfc.IFCCOLUMN, EntityTypesIfc.IFCCOVERING, EntityTypesIfc.IFCCURTAINWALL, EntityTypesIfc.IFCDOOR, EntityTypesIfc.IFCFOOTING, EntityTypesIfc.IFCMEMBER, EntityTypesIfc.IFCPILE, EntityTypesIfc.IFCPLATE, EntityTypesIfc.IFCRAILING, EntityTypesIfc.IFCRAMP, EntityTypesIfc.IFCRAMPFLIGHT, EntityTypesIfc.IFCROOF, EntityTypesIfc.IFCSHADINGDEVICE, EntityTypesIfc.IFCSLAB, EntityTypesIfc.IFCSTAIR, EntityTypesIfc.IFCSTAIRFLIGHT, EntityTypesIfc.IFCWALL, EntityTypesIfc.IFCWINDOW, EntityTypesIfc.IFCBEAMSTANDARDCASE, EntityTypesIfc.IFCCOLUMNSTANDARDCASE, EntityTypesIfc.IFCDOORSTANDARDCASE, EntityTypesIfc.IFCMEMBERSTANDARDCASE, EntityTypesIfc.IFCPLATESTANDARDCASE, EntityTypesIfc.IFCSLABELEMENTEDCASE, EntityTypesIfc.IFCSLABSTANDARDCASE, EntityTypesIfc.IFCWALLELEMENTEDCASE, EntityTypesIfc.IFCWALLSTANDARDCASE, EntityTypesIfc.IFCWINDOWSTANDARDCASE ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCBUILDINGELEMENT;
}
