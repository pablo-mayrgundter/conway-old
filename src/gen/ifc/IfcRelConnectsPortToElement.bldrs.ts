import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsporttoelement.htm */
export default  class IfcRelConnectsPortToElement extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSPORTTOELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingPort_? : IfcPort;
    private RelatedElement_? : IfcElement;


    public get RelatingPort() : IfcPort
    {
        if ( this.RelatingPort_ === void 0 )
        {
            
        }

        return this.RelatingPort_ as IfcPort;
    }


    public get RelatedElement() : IfcElement
    {
        if ( this.RelatedElement_ === void 0 )
        {
            
        }

        return this.RelatedElement_ as IfcElement;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
