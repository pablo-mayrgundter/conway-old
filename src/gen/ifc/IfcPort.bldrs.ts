import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcRelConnectsPortToElement from "./IfcRelConnectsPortToElement.bldrs"
import IfcRelConnectsPorts from "./IfcRelConnectsPorts.bldrs"
import IfcProduct from "./IfcProduct.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcport.htm */
export default abstract class IfcPort extends IfcProduct 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPORT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }










    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
