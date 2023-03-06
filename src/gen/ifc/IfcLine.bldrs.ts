import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcVector from "./IfcVector.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcline.htm */
export default  class IfcLine extends IfcCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLINE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Pnt_? : IfcCartesianPoint;
    private Dir_? : IfcVector;


    public get Pnt() : IfcCartesianPoint
    {
        if ( this.Pnt_ === void 0 )
        {
            
        }

        return this.Pnt_ as IfcCartesianPoint;
    }


    public get Dir() : IfcVector
    {
        if ( this.Dir_ === void 0 )
        {
            
        }

        return this.Dir_ as IfcVector;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
