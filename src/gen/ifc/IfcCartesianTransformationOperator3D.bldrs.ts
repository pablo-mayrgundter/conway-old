import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDirection from "./IfcDirection.bldrs"
import IfcCartesianTransformationOperator from "./IfcCartesianTransformationOperator.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesiantransformationoperator3d.htm */
export default  class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR3D;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Axis3_? : IfcDirection | null;


    public get Axis3() : IfcDirection | null
    {
        if ( this.Axis3_ === void 0 )
        {
            
        }

        return this.Axis3_ as IfcDirection | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
