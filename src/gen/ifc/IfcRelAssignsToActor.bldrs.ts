import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcActor from "./IfcActor.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstoactor.htm */
export default  class IfcRelAssignsToActor extends IfcRelAssigns 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSIGNSTOACTOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingActor_? : IfcActor;
    private ActingRole_? : IfcActorRole | null;


    public get RelatingActor() : IfcActor
    {
        if ( this.RelatingActor_ === void 0 )
        {
            
        }

        return this.RelatingActor_ as IfcActor;
    }


    public get ActingRole() : IfcActorRole | null
    {
        if ( this.ActingRole_ === void 0 )
        {
            
        }

        return this.ActingRole_ as IfcActorRole | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
