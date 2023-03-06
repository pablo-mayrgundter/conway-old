import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialclassificationrelationship.htm */
export default  class IfcMaterialClassificationRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMATERIALCLASSIFICATIONRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MaterialClassifications_? : Array<IfcClassificationNotation|IfcClassificationReference>;
    private ClassifiedMaterial_? : IfcMaterial;


    public get MaterialClassifications() : Array<IfcClassificationNotation|IfcClassificationReference>
    {
        if ( this.MaterialClassifications_ === void 0 )
        {
            
        }

        return this.MaterialClassifications_ as Array<IfcClassificationNotation|IfcClassificationReference>;
    }


    public get ClassifiedMaterial() : IfcMaterial
    {
        if ( this.ClassifiedMaterial_ === void 0 )
        {
            
        }

        return this.ClassifiedMaterial_ as IfcMaterial;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
