import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcVirtualGridIntersection from "./IfcVirtualGridIntersection.bldrs"
import IfcObjectPlacement from "./IfcObjectPlacement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgridplacement.htm */
export default  class IfcGridPlacement extends IfcObjectPlacement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGRIDPLACEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PlacementLocation_? : IfcVirtualGridIntersection;
    private PlacementRefDirection_? : IfcVirtualGridIntersection | null;


    public get PlacementLocation() : IfcVirtualGridIntersection
    {
        if ( this.PlacementLocation_ === void 0 )
        {
            
        }

        return this.PlacementLocation_ as IfcVirtualGridIntersection;
    }


    public get PlacementRefDirection() : IfcVirtualGridIntersection | null
    {
        if ( this.PlacementRefDirection_ === void 0 )
        {
            
        }

        return this.PlacementRefDirection_ as IfcVirtualGridIntersection | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
