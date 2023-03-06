import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"
import IfcRelDefines from "./IfcRelDefines.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldefinesbyproperties.htm */
export default  class IfcRelDefinesByProperties extends IfcRelDefines 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELDEFINESBYPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingPropertyDefinition_? : IfcPropertySetDefinition;


    public get RelatingPropertyDefinition() : IfcPropertySetDefinition
    {
        if ( this.RelatingPropertyDefinition_ === void 0 )
        {
            
        }

        return this.RelatingPropertyDefinition_ as IfcPropertySetDefinition;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
