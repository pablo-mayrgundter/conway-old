import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDirection from "./IfcDirection.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcVector from "./IfcVector.bldrs"
import IfcSweptSurface from "./IfcSweptSurface.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfaceoflinearextrusion.htm */
export default  class IfcSurfaceOfLinearExtrusion extends IfcSweptSurface 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACEOFLINEAREXTRUSION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ExtrudedDirection_? : IfcDirection;
    private Depth_? : IfcLengthMeasure;


    public get ExtrudedDirection() : IfcDirection
    {
        if ( this.ExtrudedDirection_ === void 0 )
        {
            
        }

        return this.ExtrudedDirection_ as IfcDirection;
    }


    public get Depth() : IfcLengthMeasure
    {
        if ( this.Depth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Depth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Depth' );
            };

            this.Depth_ = value;
        }

        return this.Depth_ as IfcLengthMeasure;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
