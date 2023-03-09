import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcRelFillsElement from "./IfcRelFillsElement.bldrs"
import IfcRelConnectsElements from "./IfcRelConnectsElements.bldrs"
import IfcRelCoversBldgElements from "./IfcRelCoversBldgElements.bldrs"
import IfcRelProjectsElement from "./IfcRelProjectsElement.bldrs"
import IfcRelConnectsStructuralElement from "./IfcRelConnectsStructuralElement.bldrs"
import IfcRelReferencedInSpatialStructure from "./IfcRelReferencedInSpatialStructure.bldrs"
import IfcRelConnectsPortToElement from "./IfcRelConnectsPortToElement.bldrs"
import IfcRelVoidsElement from "./IfcRelVoidsElement.bldrs"
import IfcRelConnectsWithRealizingElements from "./IfcRelConnectsWithRealizingElements.bldrs"
import IfcRelSpaceBoundary from "./IfcRelSpaceBoundary.bldrs"
import IfcRelContainedInSpatialStructure from "./IfcRelContainedInSpatialStructure.bldrs"
import IfcProduct from "./IfcProduct.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelement.htm */
export default abstract class IfcElement extends IfcProduct 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Tag_? : IfcIdentifier | null;

    public get Tag() : IfcIdentifier | null
    {
        if ( this.Tag_ === void 0 )
        {
            this.Tag_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

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

        return this.Tag_ as IfcIdentifier | null;
    }












    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
