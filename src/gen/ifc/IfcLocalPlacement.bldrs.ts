import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcObjectPlacement from "./IfcObjectPlacement.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclocalplacement.htm */
export default  class IfcLocalPlacement extends IfcObjectPlacement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLOCALPLACEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PlacementRelTo_? : IfcObjectPlacement | null;
    private RelativePlacement_? : IfcAxis2Placement2D|IfcAxis2Placement3D;


    public get PlacementRelTo() : IfcObjectPlacement | null
    {
        if ( this.PlacementRelTo_ === void 0 )
        {
            
        }

        return this.PlacementRelTo_ as IfcObjectPlacement | null;
    }


    public get RelativePlacement() : IfcAxis2Placement2D|IfcAxis2Placement3D
    {
        if ( this.RelativePlacement_ === void 0 )
        {
            
        }

        return this.RelativePlacement_ as IfcAxis2Placement2D|IfcAxis2Placement3D;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
