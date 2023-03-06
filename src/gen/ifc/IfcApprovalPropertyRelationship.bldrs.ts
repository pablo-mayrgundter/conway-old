import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProperty from "./IfcProperty.bldrs"
import IfcApproval from "./IfcApproval.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcapprovalpropertyrelationship.htm */
export default  class IfcApprovalPropertyRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCAPPROVALPROPERTYRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ApprovedProperties_? : Array<IfcProperty>;
    private Approval_? : IfcApproval;


    public get ApprovedProperties() : Array<IfcProperty>
    {
        if ( this.ApprovedProperties_ === void 0 )
        {
            
        }

        return this.ApprovedProperties_ as Array<IfcProperty>;
    }


    public get Approval() : IfcApproval
    {
        if ( this.Approval_ === void 0 )
        {
            
        }

        return this.Approval_ as IfcApproval;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
