import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOpeningElement from "./IfcOpeningElement.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelfillselement.htm */
export default  class IfcRelFillsElement extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELFILLSELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingOpeningElement_? : IfcOpeningElement;
    private RelatedBuildingElement_? : IfcElement;


    public get RelatingOpeningElement() : IfcOpeningElement
    {
        if ( this.RelatingOpeningElement_ === void 0 )
        {
            
        }

        return this.RelatingOpeningElement_ as IfcOpeningElement;
    }


    public get RelatedBuildingElement() : IfcElement
    {
        if ( this.RelatedBuildingElement_ === void 0 )
        {
            
        }

        return this.RelatedBuildingElement_ as IfcElement;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
