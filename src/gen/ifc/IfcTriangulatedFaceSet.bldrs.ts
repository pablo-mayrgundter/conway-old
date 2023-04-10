
import { IfcTessellatedFaceSet } from "./index"
import { IfcParameterValue } from "./index"
import { IfcBoolean } from "./index"
import { IfcPositiveInteger } from "./index"
import { IfcInteger } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctriangulatedfaceset.htm */
export  class IfcTriangulatedFaceSet extends IfcTessellatedFaceSet 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTRIANGULATEDFACESET;
    }
    private Normals_? : Array< Array< number > > | null;
    private Closed_? : boolean | null;
    private CoordIndex_? : Array< Array< number > >;
    private PnIndex_? : Array< number > | null;

    public get Normals() : Array< Array< number > > | null
    {
        if ( this.Normals_ === void 0 )
        {
            this.Normals_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;
            
            if ( stepExtractOptional( buffer, cursor, endCursor ) === null )
            {
                return null;
            }

            let value : Array<Array<number>> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value : Array<number> = [];
        
                    for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
                    {
                        value.push( (() => { 
                            let cursor = address;
                        
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    }
                        
                                    return value;
                        })() );
                    }
        
        return value;
                })() );
            }

return value; })();
        }

        return this.Normals_ as Array< Array< number > > | null;
    }

    public get Closed() : boolean | null
    {
        if ( this.Closed_ === void 0 )
        {
            this.Closed_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

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

        return this.Closed_ as boolean | null;
    }

    public get CoordIndex() : Array< Array< number > >
    {
        if ( this.CoordIndex_ === void 0 )
        {
            this.CoordIndex_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<Array<number>> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value : Array<number> = [];
        
                    for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
                    {
                        value.push( (() => { 
                            let cursor = address;
                        
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    }
                        
                                    return value;
                        })() );
                    }
        
        return value;
                })() );
            }

return value; })();
        }

        return this.CoordIndex_ as Array< Array< number > >;
    }

    public get PnIndex() : Array< number > | null
    {
        if ( this.PnIndex_ === void 0 )
        {
            this.PnIndex_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;
            
            if ( stepExtractOptional( buffer, cursor, endCursor ) === null )
            {
                return null;
            }

            let value : Array<number> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
                    if ( value === void 0 )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed' );
                    }
        
                    return value;
                })() );
            }

return value; })();
        }

        return this.PnIndex_ as Array< number > | null;
    }

    public get NumberOfTriangles() : number
    {
        return SIZEOF(this?.CoordIndex);
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCTRIANGULATEDFACESET ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCTRIANGULATEDFACESET;
}
