
import { IfcGeometricRepresentationItem } from "./index"
import { IfcBooleanOperator, IfcBooleanOperatorDeserializeStep } from "./index"
import { IfcSolidModel } from "./index"
import { IfcHalfSpaceSolid } from "./index"
import { IfcCsgPrimitive3D } from "./index"
import { IfcDimensionCount } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbooleanresult.htm */
export  class IfcBooleanResult extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBOOLEANRESULT;
    }

    private Operator_? : IfcBooleanOperator;
    private FirstOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    private SecondOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;

    public get Operator() : IfcBooleanOperator
    {
        if ( this.Operator_ === void 0 )
        {
            this.Operator_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcBooleanOperatorDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.Operator_ as IfcBooleanOperator;
    }

    public get FirstOperand() : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D
    {
        if ( this.FirstOperand_ === void 0 )
        {
            this.FirstOperand_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           

            if ( !( value instanceof IfcSolidModel ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            }

            return value as (IfcSolidModel | IfcHalfSpaceSolid | IfcBooleanResult | IfcCsgPrimitive3D); })();
        }

        return this.FirstOperand_ as IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    }

    public get SecondOperand() : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D
    {
        if ( this.SecondOperand_ === void 0 )
        {
            this.SecondOperand_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           

            if ( !( value instanceof IfcSolidModel ) && !( value instanceof IfcHalfSpaceSolid ) && !( value instanceof IfcBooleanResult ) && !( value instanceof IfcCsgPrimitive3D ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            }

            return value as (IfcSolidModel | IfcHalfSpaceSolid | IfcBooleanResult | IfcCsgPrimitive3D); })();
        }

        return this.SecondOperand_ as IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    }

    public get Dim() : number
    {
        return this?.FirstOperand.Dim;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
