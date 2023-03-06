import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcSolidModel from "./IfcSolidModel.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsweptareasolid.htm */
export default abstract class IfcSweptAreaSolid extends IfcSolidModel 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSWEPTAREASOLID;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SweptArea_? : IfcProfileDef;
    private Position_? : IfcAxis2Placement3D;


    public get SweptArea() : IfcProfileDef
    {
        if ( this.SweptArea_ === void 0 )
        {
            
        }

        return this.SweptArea_ as IfcProfileDef;
    }


    public get Position() : IfcAxis2Placement3D
    {
        if ( this.Position_ === void 0 )
        {
            
        }

        return this.Position_ as IfcAxis2Placement3D;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
