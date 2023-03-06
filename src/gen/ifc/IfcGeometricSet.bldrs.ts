import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPoint from "./IfcPoint.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricset.htm */
export default  class IfcGeometricSet extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGEOMETRICSET;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Elements_? : Array<IfcPoint|IfcCurve|IfcSurface>;


    public get Elements() : Array<IfcPoint|IfcCurve|IfcSurface>
    {
        if ( this.Elements_ === void 0 )
        {
            
        }

        return this.Elements_ as Array<IfcPoint|IfcCurve|IfcSurface>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
