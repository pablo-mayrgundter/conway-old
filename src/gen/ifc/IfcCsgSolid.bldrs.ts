import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBooleanResult from "./IfcBooleanResult.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"
import IfcSolidModel from "./IfcSolidModel.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccsgsolid.htm */
export default  class IfcCsgSolid extends IfcSolidModel 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCSGSOLID;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TreeRootExpression_? : IfcBooleanResult|IfcCsgPrimitive3D;


    public get TreeRootExpression() : IfcBooleanResult|IfcCsgPrimitive3D
    {
        if ( this.TreeRootExpression_ === void 0 )
        {
            
        }

        return this.TreeRootExpression_ as IfcBooleanResult|IfcCsgPrimitive3D;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
