import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcClassification from "./IfcClassification.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcclassificationreference.htm */
export default  class IfcClassificationReference extends IfcExternalReference 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCLASSIFICATIONREFERENCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ReferencedSource_? : IfcClassification | null;


    public get ReferencedSource() : IfcClassification | null
    {
        if ( this.ReferencedSource_ === void 0 )
        {
            
        }

        return this.ReferencedSource_ as IfcClassification | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
