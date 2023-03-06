import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcHalfSpaceSolid from "./IfcHalfSpaceSolid.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpolygonalboundedhalfspace.htm */
export default  class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPOLYGONALBOUNDEDHALFSPACE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Position_? : IfcAxis2Placement3D;
    private PolygonalBoundary_? : IfcBoundedCurve;


    public get Position() : IfcAxis2Placement3D
    {
        if ( this.Position_ === void 0 )
        {
            
        }

        return this.Position_ as IfcAxis2Placement3D;
    }


    public get PolygonalBoundary() : IfcBoundedCurve
    {
        if ( this.PolygonalBoundary_ === void 0 )
        {
            
        }

        return this.PolygonalBoundary_ as IfcBoundedCurve;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
