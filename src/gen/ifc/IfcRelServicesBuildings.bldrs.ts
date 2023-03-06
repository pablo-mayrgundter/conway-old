import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSystem from "./IfcSystem.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelservicesbuildings.htm */
export default  class IfcRelServicesBuildings extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELSERVICESBUILDINGS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingSystem_? : IfcSystem;
    private RelatedBuildings_? : Array<IfcSpatialStructureElement>;


    public get RelatingSystem() : IfcSystem
    {
        if ( this.RelatingSystem_ === void 0 )
        {
            
        }

        return this.RelatingSystem_ as IfcSystem;
    }


    public get RelatedBuildings() : Array<IfcSpatialStructureElement>
    {
        if ( this.RelatedBuildings_ === void 0 )
        {
            
        }

        return this.RelatedBuildings_ as Array<IfcSpatialStructureElement>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
