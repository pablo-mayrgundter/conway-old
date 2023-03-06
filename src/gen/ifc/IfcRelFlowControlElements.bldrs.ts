import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDistributionControlElement from "./IfcDistributionControlElement.bldrs"
import IfcDistributionFlowElement from "./IfcDistributionFlowElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelflowcontrolelements.htm */
export default  class IfcRelFlowControlElements extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELFLOWCONTROLELEMENTS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatedControlElements_? : Array<IfcDistributionControlElement>;
    private RelatingFlowElement_? : IfcDistributionFlowElement;


    public get RelatedControlElements() : Array<IfcDistributionControlElement>
    {
        if ( this.RelatedControlElements_ === void 0 )
        {
            
        }

        return this.RelatedControlElements_ as Array<IfcDistributionControlElement>;
    }


    public get RelatingFlowElement() : IfcDistributionFlowElement
    {
        if ( this.RelatingFlowElement_ === void 0 )
        {
            
        }

        return this.RelatingFlowElement_ as IfcDistributionFlowElement;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
