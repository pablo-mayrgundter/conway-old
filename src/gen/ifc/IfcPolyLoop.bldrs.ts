import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcLoop from "./IfcLoop.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolyloop.htm */
export default  class IfcPolyLoop extends IfcLoop 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPOLYLOOP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Polygon_? : Array<IfcCartesianPoint>;


    public get Polygon() : Array<IfcCartesianPoint>
    {
        if ( this.Polygon_ === void 0 )
        {
            
        }

        return this.Polygon_ as Array<IfcCartesianPoint>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
