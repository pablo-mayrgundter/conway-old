import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcClassificationItem from "./IfcClassificationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcclassificationitemrelationship.htm */
export default  class IfcClassificationItemRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCLASSIFICATIONITEMRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingItem_? : IfcClassificationItem;
    private RelatedItems_? : Array<IfcClassificationItem>;


    public get RelatingItem() : IfcClassificationItem
    {
        if ( this.RelatingItem_ === void 0 )
        {
            
        }

        return this.RelatingItem_ as IfcClassificationItem;
    }


    public get RelatedItems() : Array<IfcClassificationItem>
    {
        if ( this.RelatedItems_ === void 0 )
        {
            
        }

        return this.RelatedItems_ as Array<IfcClassificationItem>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
