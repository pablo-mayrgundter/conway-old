
import { IfcGeometricRepresentationItem } from "./index"
import { IfcClosedShell } from "./index"
import { IfcOpenShell } from "./index"
import { IfcDimensionCount } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcshellbasedsurfacemodel.htm */
export  class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL;
    }
    private SbsmBoundary_? : Array<IfcClosedShell|IfcOpenShell>;

    public get SbsmBoundary() : Array<IfcClosedShell|IfcOpenShell>
    {
        if ( this.SbsmBoundary_ === void 0 )
        {
            this.SbsmBoundary_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcClosedShell|IfcOpenShell> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           
        
                    if ( !( value instanceof IfcClosedShell ) && !( value instanceof IfcOpenShell ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    }
        
                    return value as (IfcClosedShell | IfcOpenShell);
                })() );
            }

return value; })();
        }

        return this.SbsmBoundary_ as Array<IfcClosedShell|IfcOpenShell>;
    }

    public get Dim() : number
    {
        return 3;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }

    public static readonly query = [ EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL ];

    public static readonly expectedType: EntityTypesIfc = EntityTypesIfc.IFCSHELLBASEDSURFACEMODEL;
}
