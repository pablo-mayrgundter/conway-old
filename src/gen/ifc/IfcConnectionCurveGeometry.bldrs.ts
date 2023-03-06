import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcEdgeCurve from "./IfcEdgeCurve.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectioncurvegeometry.htm */
export default  class IfcConnectionCurveGeometry extends IfcConnectionGeometry 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONNECTIONCURVEGEOMETRY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private CurveOnRelatingElement_? : IfcBoundedCurve|IfcEdgeCurve;
    private CurveOnRelatedElement_? : IfcBoundedCurve|IfcEdgeCurve | null;


    public get CurveOnRelatingElement() : IfcBoundedCurve|IfcEdgeCurve
    {
        if ( this.CurveOnRelatingElement_ === void 0 )
        {
            
        }

        return this.CurveOnRelatingElement_ as IfcBoundedCurve|IfcEdgeCurve;
    }


    public get CurveOnRelatedElement() : IfcBoundedCurve|IfcEdgeCurve | null
    {
        if ( this.CurveOnRelatedElement_ === void 0 )
        {
            
        }

        return this.CurveOnRelatedElement_ as IfcBoundedCurve|IfcEdgeCurve | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
