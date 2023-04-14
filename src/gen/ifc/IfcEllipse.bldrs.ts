
import { IfcConic } from "./index"
import { IfcPositiveLengthMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcellipse.htm */
export  class IfcEllipse extends IfcConic 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCELLIPSE;
    }
    private SemiAxis1_? : number;
    private SemiAxis2_? : number;

    public get SemiAxis1() : number
    {
        if ( this.SemiAxis1_ === void 0 )
        {
            this.SemiAxis1_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            }

            return value; })();
        }

        return this.SemiAxis1_ as number;
    }

    public get SemiAxis2() : number
    {
        if ( this.SemiAxis2_ === void 0 )
        {
            this.SemiAxis2_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            }

            return value; })();
        }

        return this.SemiAxis2_ as number;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCELLIPSE ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCELLIPSE;
}
