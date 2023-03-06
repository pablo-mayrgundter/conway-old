import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcunitassignment.htm */
export default  class IfcUnitAssignment extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCUNITASSIGNMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Units_? : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>;


    public get Units() : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>
    {
        if ( this.Units_ === void 0 )
        {
            
        }

        return this.Units_ as Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
