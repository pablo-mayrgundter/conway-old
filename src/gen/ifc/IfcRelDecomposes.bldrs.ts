import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"
import IfcRelationship from "./IfcRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldecomposes.htm */
export default abstract class IfcRelDecomposes extends IfcRelationship 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELDECOMPOSES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingObject_? : IfcObjectDefinition;
    private RelatedObjects_? : Array<IfcObjectDefinition>;


    public get RelatingObject() : IfcObjectDefinition
    {
        if ( this.RelatingObject_ === void 0 )
        {
            
        }

        return this.RelatingObject_ as IfcObjectDefinition;
    }


    public get RelatedObjects() : Array<IfcObjectDefinition>
    {
        if ( this.RelatedObjects_ === void 0 )
        {
            
        }

        return this.RelatedObjects_ as Array<IfcObjectDefinition>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
