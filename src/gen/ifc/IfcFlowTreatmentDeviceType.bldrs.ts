import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDistributionFlowElementType from "./IfcDistributionFlowElementType.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcflowtreatmentdevicetype.htm */
export default abstract class IfcFlowTreatmentDeviceType extends IfcDistributionFlowElementType 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFLOWTREATMENTDEVICETYPE;
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
