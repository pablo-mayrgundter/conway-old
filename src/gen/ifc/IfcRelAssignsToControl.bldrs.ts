import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcControl from "./IfcControl.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassignstocontrol.htm */
export default  class IfcRelAssignsToControl extends IfcRelAssigns 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSIGNSTOCONTROL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingControl_? : IfcControl;


    public get RelatingControl() : IfcControl
    {
        if ( this.RelatingControl_ === void 0 )
        {
            
        }

        return this.RelatingControl_ as IfcControl;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
