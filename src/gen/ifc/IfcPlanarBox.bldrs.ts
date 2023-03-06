import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcPlanarExtent from "./IfcPlanarExtent.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcplanarbox.htm */
export default  class IfcPlanarBox extends IfcPlanarExtent 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPLANARBOX;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Placement_? : IfcAxis2Placement2D|IfcAxis2Placement3D;


    public get Placement() : IfcAxis2Placement2D|IfcAxis2Placement3D
    {
        if ( this.Placement_ === void 0 )
        {
            
        }

        return this.Placement_ as IfcAxis2Placement2D|IfcAxis2Placement3D;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
