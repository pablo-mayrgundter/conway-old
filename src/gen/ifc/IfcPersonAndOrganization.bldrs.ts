import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPerson from "./IfcPerson.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpersonandorganization.htm */
export default  class IfcPersonAndOrganization extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPERSONANDORGANIZATION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ThePerson_? : IfcPerson;
    private TheOrganization_? : IfcOrganization;
    private Roles_? : Array<IfcActorRole> | null;


    public get ThePerson() : IfcPerson
    {
        if ( this.ThePerson_ === void 0 )
        {
            
        }

        return this.ThePerson_ as IfcPerson;
    }


    public get TheOrganization() : IfcOrganization
    {
        if ( this.TheOrganization_ === void 0 )
        {
            
        }

        return this.TheOrganization_ as IfcOrganization;
    }


    public get Roles() : Array<IfcActorRole> | null
    {
        if ( this.Roles_ === void 0 )
        {
            
        }

        return this.Roles_ as Array<IfcActorRole> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
