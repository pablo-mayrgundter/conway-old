import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProduct from "./IfcProduct.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstoproduct.htm */
export default  class IfcRelAssignsToProduct extends IfcRelAssigns 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSIGNSTOPRODUCT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingProduct_? : IfcProduct;


    public get RelatingProduct() : IfcProduct
    {
        if ( this.RelatingProduct_ === void 0 )
        {
            
        }

        return this.RelatingProduct_ as IfcProduct;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
