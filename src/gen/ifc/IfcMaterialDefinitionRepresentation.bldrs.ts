import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialdefinitionrepresentation.htm */
export default  class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RepresentedMaterial_? : IfcMaterial;


    public get RepresentedMaterial() : IfcMaterial
    {
        if ( this.RepresentedMaterial_ === void 0 )
        {
            
        }

        return this.RepresentedMaterial_ as IfcMaterial;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
