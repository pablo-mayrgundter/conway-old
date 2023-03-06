import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcGroup from "./IfcGroup.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstogroup.htm */
export default  class IfcRelAssignsToGroup extends IfcRelAssigns 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSIGNSTOGROUP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingGroup_? : IfcGroup;


    public get RelatingGroup() : IfcGroup
    {
        if ( this.RelatingGroup_ === void 0 )
        {
            
        }

        return this.RelatingGroup_ as IfcGroup;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
