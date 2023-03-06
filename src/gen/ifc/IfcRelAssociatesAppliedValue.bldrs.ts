import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesappliedvalue.htm */
export default  class IfcRelAssociatesAppliedValue extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESAPPLIEDVALUE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingAppliedValue_? : IfcAppliedValue;


    public get RelatingAppliedValue() : IfcAppliedValue
    {
        if ( this.RelatingAppliedValue_ === void 0 )
        {
            
        }

        return this.RelatingAppliedValue_ as IfcAppliedValue;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
