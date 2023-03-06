import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcStructuralItem from "./IfcStructuralItem.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcStructuralActivity from "./IfcStructuralActivity.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsstructuralactivity.htm */
export default  class IfcRelConnectsStructuralActivity extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingElement_? : IfcStructuralItem|IfcElement;
    private RelatedStructuralActivity_? : IfcStructuralActivity;


    public get RelatingElement() : IfcStructuralItem|IfcElement
    {
        if ( this.RelatingElement_ === void 0 )
        {
            
        }

        return this.RelatingElement_ as IfcStructuralItem|IfcElement;
    }


    public get RelatedStructuralActivity() : IfcStructuralActivity
    {
        if ( this.RelatedStructuralActivity_ === void 0 )
        {
            
        }

        return this.RelatedStructuralActivity_ as IfcStructuralActivity;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
