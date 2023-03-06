import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDirection from "./IfcDirection.bldrs"
import IfcPlacement from "./IfcPlacement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcaxis2placement3d.htm */
export default  class IfcAxis2Placement3D extends IfcPlacement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCAXIS2PLACEMENT3D;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Axis_? : IfcDirection | null;
    private RefDirection_? : IfcDirection | null;


    public get Axis() : IfcDirection | null
    {
        if ( this.Axis_ === void 0 )
        {
            
        }

        return this.Axis_ as IfcDirection | null;
    }


    public get RefDirection() : IfcDirection | null
    {
        if ( this.RefDirection_ === void 0 )
        {
            
        }

        return this.RefDirection_ as IfcDirection | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
