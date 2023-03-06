import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcApproval from "./IfcApproval.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesapproval.htm */
export default  class IfcRelAssociatesApproval extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESAPPROVAL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingApproval_? : IfcApproval;


    public get RelatingApproval() : IfcApproval
    {
        if ( this.RelatingApproval_ === void 0 )
        {
            
        }

        return this.RelatingApproval_ as IfcApproval;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
