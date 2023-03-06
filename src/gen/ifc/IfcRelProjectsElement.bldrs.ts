import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementAddition from "./IfcFeatureElementAddition.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelprojectselement.htm */
export default  class IfcRelProjectsElement extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELPROJECTSELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingElement_? : IfcElement;
    private RelatedFeatureElement_? : IfcFeatureElementAddition;


    public get RelatingElement() : IfcElement
    {
        if ( this.RelatingElement_ === void 0 )
        {
            
        }

        return this.RelatingElement_ as IfcElement;
    }


    public get RelatedFeatureElement() : IfcFeatureElementAddition
    {
        if ( this.RelatedFeatureElement_ === void 0 )
        {
            
        }

        return this.RelatedFeatureElement_ as IfcFeatureElementAddition;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
