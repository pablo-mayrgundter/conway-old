

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcperformancehistory.htm */
export default  class IfcPerformanceHistory extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPERFORMANCEHISTORY;
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
