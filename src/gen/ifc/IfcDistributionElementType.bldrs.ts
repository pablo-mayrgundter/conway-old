
import { IfcElementType } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdistributionelementtype.htm */
export  class IfcDistributionElementType extends IfcElementType 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE, EntityTypesIfc.IFCACTUATORTYPE, EntityTypesIfc.IFCALARMTYPE, EntityTypesIfc.IFCCONTROLLERTYPE, EntityTypesIfc.IFCFLOWINSTRUMENTTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE, EntityTypesIfc.IFCSENSORTYPE, EntityTypesIfc.IFCUNITARYCONTROLELEMENTTYPE, EntityTypesIfc.IFCDISTRIBUTIONCHAMBERELEMENTTYPE, EntityTypesIfc.IFCAIRTOAIRHEATRECOVERYTYPE, EntityTypesIfc.IFCBOILERTYPE, EntityTypesIfc.IFCBURNERTYPE, EntityTypesIfc.IFCCHILLERTYPE, EntityTypesIfc.IFCCOILTYPE, EntityTypesIfc.IFCCONDENSERTYPE, EntityTypesIfc.IFCCOOLEDBEAMTYPE, EntityTypesIfc.IFCCOOLINGTOWERTYPE, EntityTypesIfc.IFCELECTRICGENERATORTYPE, EntityTypesIfc.IFCELECTRICMOTORTYPE, EntityTypesIfc.IFCENGINETYPE, EntityTypesIfc.IFCEVAPORATIVECOOLERTYPE, EntityTypesIfc.IFCEVAPORATORTYPE, EntityTypesIfc.IFCHEATEXCHANGERTYPE, EntityTypesIfc.IFCHUMIDIFIERTYPE, EntityTypesIfc.IFCMOTORCONNECTIONTYPE, EntityTypesIfc.IFCSOLARDEVICETYPE, EntityTypesIfc.IFCTRANSFORMERTYPE, EntityTypesIfc.IFCTUBEBUNDLETYPE, EntityTypesIfc.IFCUNITARYEQUIPMENTTYPE, EntityTypesIfc.IFCAIRTERMINALBOXTYPE, EntityTypesIfc.IFCDAMPERTYPE, EntityTypesIfc.IFCELECTRICDISTRIBUTIONBOARDTYPE, EntityTypesIfc.IFCELECTRICTIMECONTROLTYPE, EntityTypesIfc.IFCFLOWMETERTYPE, EntityTypesIfc.IFCPROTECTIVEDEVICETYPE, EntityTypesIfc.IFCSWITCHINGDEVICETYPE, EntityTypesIfc.IFCVALVETYPE, EntityTypesIfc.IFCCABLECARRIERFITTINGTYPE, EntityTypesIfc.IFCCABLEFITTINGTYPE, EntityTypesIfc.IFCDUCTFITTINGTYPE, EntityTypesIfc.IFCJUNCTIONBOXTYPE, EntityTypesIfc.IFCPIPEFITTINGTYPE, EntityTypesIfc.IFCCOMPRESSORTYPE, EntityTypesIfc.IFCFANTYPE, EntityTypesIfc.IFCPUMPTYPE, EntityTypesIfc.IFCCABLECARRIERSEGMENTTYPE, EntityTypesIfc.IFCCABLESEGMENTTYPE, EntityTypesIfc.IFCDUCTSEGMENTTYPE, EntityTypesIfc.IFCPIPESEGMENTTYPE, EntityTypesIfc.IFCELECTRICFLOWSTORAGEDEVICETYPE, EntityTypesIfc.IFCTANKTYPE, EntityTypesIfc.IFCAIRTERMINALTYPE, EntityTypesIfc.IFCAUDIOVISUALAPPLIANCETYPE, EntityTypesIfc.IFCCOMMUNICATIONSAPPLIANCETYPE, EntityTypesIfc.IFCELECTRICAPPLIANCETYPE, EntityTypesIfc.IFCFIRESUPPRESSIONTERMINALTYPE, EntityTypesIfc.IFCLAMPTYPE, EntityTypesIfc.IFCLIGHTFIXTURETYPE, EntityTypesIfc.IFCMEDICALDEVICETYPE, EntityTypesIfc.IFCOUTLETTYPE, EntityTypesIfc.IFCSANITARYTERMINALTYPE, EntityTypesIfc.IFCSPACEHEATERTYPE, EntityTypesIfc.IFCSTACKTERMINALTYPE, EntityTypesIfc.IFCWASTETERMINALTYPE, EntityTypesIfc.IFCDUCTSILENCERTYPE, EntityTypesIfc.IFCFILTERTYPE, EntityTypesIfc.IFCINTERCEPTORTYPE ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCDISTRIBUTIONELEMENTTYPE;
}
