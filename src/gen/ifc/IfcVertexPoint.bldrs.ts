import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvertexpoint.htm */
export default  class IfcVertexPoint extends IfcVertex 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCVERTEXPOINT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private VertexGeometry_? : IfcPoint;

    public get VertexGeometry() : IfcPoint
    {
        if ( this.VertexGeometry_ === void 0 )
        {
            this.VertexGeometry_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( value === void 0 || !( value instanceof IfcPoint ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.VertexGeometry_ as IfcPoint;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
