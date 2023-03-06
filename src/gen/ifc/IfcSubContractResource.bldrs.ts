import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcConstructionResource from "./IfcConstructionResource.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsubcontractresource.htm */
export default  class IfcSubContractResource extends IfcConstructionResource 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSUBCONTRACTRESOURCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SubContractor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    private JobDescription_? : IfcText | null;


    public get SubContractor() : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null
    {
        if ( this.SubContractor_ === void 0 )
        {
            
        }

        return this.SubContractor_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    }


    public get JobDescription() : IfcText | null
    {
        if ( this.JobDescription_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field JobDescription due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field JobDescription' );
                }

                this.JobDescription_ = null;                
            }
            else
            {
                this.JobDescription_ = value;
            }
        }

        return this.JobDescription_ as IfcText | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
