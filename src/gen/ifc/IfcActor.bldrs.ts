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
import IfcRelAssignsToActor from "./IfcRelAssignsToActor.bldrs"
import IfcObject from "./IfcObject.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcactor.htm */
export default  class IfcActor extends IfcObject 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCACTOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TheActor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;


    public get TheActor() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.TheActor_ === void 0 )
        {
            
        }

        return this.TheActor_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
