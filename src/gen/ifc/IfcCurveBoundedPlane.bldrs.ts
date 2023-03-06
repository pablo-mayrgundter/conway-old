import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPlane from "./IfcPlane.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcBoundedSurface from "./IfcBoundedSurface.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurveboundedplane.htm */
export default  class IfcCurveBoundedPlane extends IfcBoundedSurface 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCURVEBOUNDEDPLANE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BasisSurface_? : IfcPlane;
    private OuterBoundary_? : IfcCurve;
    private InnerBoundaries_? : Array<IfcCurve>;


    public get BasisSurface() : IfcPlane
    {
        if ( this.BasisSurface_ === void 0 )
        {
            
        }

        return this.BasisSurface_ as IfcPlane;
    }


    public get OuterBoundary() : IfcCurve
    {
        if ( this.OuterBoundary_ === void 0 )
        {
            
        }

        return this.OuterBoundary_ as IfcCurve;
    }


    public get InnerBoundaries() : Array<IfcCurve>
    {
        if ( this.InnerBoundaries_ === void 0 )
        {
            
        }

        return this.InnerBoundaries_ as Array<IfcCurve>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
