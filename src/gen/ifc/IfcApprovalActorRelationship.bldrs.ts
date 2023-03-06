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
import IfcApproval from "./IfcApproval.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcapprovalactorrelationship.htm */
export default  class IfcApprovalActorRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCAPPROVALACTORRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Actor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    private Approval_? : IfcApproval;
    private Role_? : IfcActorRole;


    public get Actor() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.Actor_ === void 0 )
        {
            
        }

        return this.Actor_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }


    public get Approval() : IfcApproval
    {
        if ( this.Approval_ === void 0 )
        {
            
        }

        return this.Approval_ as IfcApproval;
    }


    public get Role() : IfcActorRole
    {
        if ( this.Role_ === void 0 )
        {
            
        }

        return this.Role_ as IfcActorRole;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
