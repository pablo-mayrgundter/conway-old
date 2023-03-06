import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProduct from "./IfcProduct.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelreferencedinspatialstructure.htm */
export default  class IfcRelReferencedInSpatialStructure extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELREFERENCEDINSPATIALSTRUCTURE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatedElements_? : Array<IfcProduct>;
    private RelatingStructure_? : IfcSpatialStructureElement;


    public get RelatedElements() : Array<IfcProduct>
    {
        if ( this.RelatedElements_ === void 0 )
        {
            
        }

        return this.RelatedElements_ as Array<IfcProduct>;
    }


    public get RelatingStructure() : IfcSpatialStructureElement
    {
        if ( this.RelatingStructure_ === void 0 )
        {
            
        }

        return this.RelatingStructure_ as IfcSpatialStructureElement;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
