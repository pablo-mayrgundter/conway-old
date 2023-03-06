import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProperty from "./IfcProperty.bldrs"
import IfcRelDefinesByProperties from "./IfcRelDefinesByProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreloverridesproperties.htm */
export default  class IfcRelOverridesProperties extends IfcRelDefinesByProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELOVERRIDESPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private OverridingProperties_? : Array<IfcProperty>;


    public get OverridingProperties() : Array<IfcProperty>
    {
        if ( this.OverridingProperties_ === void 0 )
        {
            
        }

        return this.OverridingProperties_ as Array<IfcProperty>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
