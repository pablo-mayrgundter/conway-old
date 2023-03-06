import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolyline.htm */
export default  class IfcPolyline extends IfcBoundedCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPOLYLINE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Points_? : Array<IfcCartesianPoint>;


    public get Points() : Array<IfcCartesianPoint>
    {
        if ( this.Points_ === void 0 )
        {
            
        }

        return this.Points_ as Array<IfcCartesianPoint>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
