
import { IfcElement } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdistributionelement.htm */
export  class IfcDistributionElement extends IfcElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDISTRIBUTIONELEMENT;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCDISTRIBUTIONELEMENT, EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT, EntityTypesIfc.IFCDISTRIBUTIONFLOWELEMENT, EntityTypesIfc.IFCACTUATOR, EntityTypesIfc.IFCALARM, EntityTypesIfc.IFCCONTROLLER, EntityTypesIfc.IFCFLOWINSTRUMENT, EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNIT, EntityTypesIfc.IFCSENSOR, EntityTypesIfc.IFCUNITARYCONTROLELEMENT, EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENT, EntityTypesIfc.IFCENERGYCONVERSIONDEVICE, EntityTypesIfc.IFCFLOWCONTROLLER, EntityTypesIfc.IFCFLOWFITTING, EntityTypesIfc.IFCFLOWMOVINGDEVICE, EntityTypesIfc.IFCFLOWSEGMENT, EntityTypesIfc.IFCFLOWSTORAGEDEVICE, EntityTypesIfc.IFCFLOWTERMINAL, EntityTypesIfc.IFCFLOWTREATMENTDEVICE ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCDISTRIBUTIONELEMENT;
}
