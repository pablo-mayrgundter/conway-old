import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis1Placement from "./IfcAxis1Placement.bldrs"
import IfcLine from "./IfcLine.bldrs"
import IfcSweptSurface from "./IfcSweptSurface.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfaceofrevolution.htm */
export default  class IfcSurfaceOfRevolution extends IfcSweptSurface 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACEOFREVOLUTION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private AxisPosition_? : IfcAxis1Placement;


    public get AxisPosition() : IfcAxis1Placement
    {
        if ( this.AxisPosition_ === void 0 )
        {
            
        }

        return this.AxisPosition_ as IfcAxis1Placement;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
