
import { IfcConstraint } from "./index"
import { IfcBenchmarkEnum, IfcBenchmarkEnumDeserializeStep } from "./index"
import { IfcLabel } from "./index"
import { IfcCalendarDate } from "./index"
import { IfcLocalTime } from "./index"
import { IfcDateAndTime } from "./index"
import { IfcMeasureWithUnit } from "./index"
import { IfcTable } from "./index"
import { IfcText } from "./index"
import { IfcTimeSeries } from "./index"
import { IfcCostValue } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmetric.htm */
export  class IfcMetric extends IfcConstraint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMETRIC;
    }

    private Benchmark_? : IfcBenchmarkEnum;
    private ValueSource_? : string | null;
    private DataValue_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;

    public get Benchmark() : IfcBenchmarkEnum
    {
        if ( this.Benchmark_ === void 0 )
        {
            this.Benchmark_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcBenchmarkEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.Benchmark_ as IfcBenchmarkEnum;
    }

    public get ValueSource() : string | null
    {
        if ( this.ValueSource_ === void 0 )
        {
            this.ValueSource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.ValueSource_ as string | null;
    }

    public get DataValue() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue
    {
        if ( this.DataValue_ === void 0 )
        {
            this.DataValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           

            if ( !( value instanceof IfcCalendarDate ) && !( value instanceof IfcLocalTime ) && !( value instanceof IfcDateAndTime ) && !( value instanceof IfcMeasureWithUnit ) && !( value instanceof IfcTable ) && !( value instanceof IfcText ) && !( value instanceof IfcTimeSeries ) && !( value instanceof IfcCostValue ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            }

            return value as (IfcCalendarDate | IfcLocalTime | IfcDateAndTime | IfcMeasureWithUnit | IfcTable | IfcText | IfcTimeSeries | IfcCostValue); })();
        }

        return this.DataValue_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
