import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcphysicalsimplequantity.htm */
export default abstract class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPHYSICALSIMPLEQUANTITY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Unit_? : IfcNamedUnit | null;


    public get Unit() : IfcNamedUnit | null
    {
        if ( this.Unit_ === void 0 )
        {
            
        }

        return this.Unit_ as IfcNamedUnit | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
