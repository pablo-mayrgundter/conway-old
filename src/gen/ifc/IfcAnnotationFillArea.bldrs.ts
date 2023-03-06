import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcannotationfillarea.htm */
export default  class IfcAnnotationFillArea extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCANNOTATIONFILLAREA;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private OuterBoundary_? : IfcCurve;
    private InnerBoundaries_? : Array<IfcCurve> | null;


    public get OuterBoundary() : IfcCurve
    {
        if ( this.OuterBoundary_ === void 0 )
        {
            
        }

        return this.OuterBoundary_ as IfcCurve;
    }


    public get InnerBoundaries() : Array<IfcCurve> | null
    {
        if ( this.InnerBoundaries_ === void 0 )
        {
            
        }

        return this.InnerBoundaries_ as Array<IfcCurve> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
