
import { IfcResourceLevelRelationship } from "./index"
import { IfcExternalReference } from "./index"
import { IfcActorRole } from "./index"
import { IfcAppliedValue } from "./index"
import { IfcApproval } from "./index"
import { IfcConstraint } from "./index"
import { IfcContextDependentUnit } from "./index"
import { IfcConversionBasedUnit } from "./index"
import { IfcExternalInformation } from "./index"
import { IfcMaterialDefinition } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"
import { IfcPhysicalQuantity } from "./index"
import { IfcProfileDef } from "./index"
import { IfcPropertyAbstraction } from "./index"
import { IfcTimeSeries } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, stepExtractLogical, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum, IfcPointListDim, IfcGetBasisSurface } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcexternalreferencerelationship.htm */
export  class IfcExternalReferenceRelationship extends IfcResourceLevelRelationship 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCEXTERNALREFERENCERELATIONSHIP;
    }

    private RelatingReference_? : IfcExternalReference;
    private RelatedResourceObjects_? : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>;

    public get RelatingReference() : IfcExternalReference
    {
        if ( this.RelatingReference_ === void 0 )
        {
            this.RelatingReference_ = (() => { this.guaranteeVTable();

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
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcExternalReference ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.RelatingReference_ as IfcExternalReference;
    }

    public get RelatedResourceObjects() : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>
    {
        if ( this.RelatedResourceObjects_ === void 0 )
        {
            this.RelatedResourceObjects_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           
        
                    if ( !( value instanceof IfcActorRole ) && !( value instanceof IfcAppliedValue ) && !( value instanceof IfcApproval ) && !( value instanceof IfcConstraint ) && !( value instanceof IfcContextDependentUnit ) && !( value instanceof IfcConversionBasedUnit ) && !( value instanceof IfcExternalInformation ) && !( value instanceof IfcExternalReference ) && !( value instanceof IfcMaterialDefinition ) && !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) && !( value instanceof IfcPhysicalQuantity ) && !( value instanceof IfcProfileDef ) && !( value instanceof IfcPropertyAbstraction ) && !( value instanceof IfcTimeSeries ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    }
        
                    return value as (IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries);
                })() );
            }

return value; })();
        }

        return this.RelatedResourceObjects_ as Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
