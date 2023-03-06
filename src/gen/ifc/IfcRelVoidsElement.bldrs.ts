import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementSubtraction from "./IfcFeatureElementSubtraction.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelvoidselement.htm */
export default  class IfcRelVoidsElement extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELVOIDSELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingBuildingElement_? : IfcElement;
    private RelatedOpeningElement_? : IfcFeatureElementSubtraction;


    public get RelatingBuildingElement() : IfcElement
    {
        if ( this.RelatingBuildingElement_ === void 0 )
        {
            
        }

        return this.RelatingBuildingElement_ as IfcElement;
    }


    public get RelatedOpeningElement() : IfcFeatureElementSubtraction
    {
        if ( this.RelatedOpeningElement_ === void 0 )
        {
            
        }

        return this.RelatedOpeningElement_ as IfcFeatureElementSubtraction;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
