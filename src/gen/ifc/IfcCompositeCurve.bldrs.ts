import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCompositeCurveSegment from "./IfcCompositeCurveSegment.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompositecurve.htm */
export default  class IfcCompositeCurve extends IfcBoundedCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCOMPOSITECURVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Segments_? : Array<IfcCompositeCurveSegment>;
    private SelfIntersect_? : boolean;


    public get Segments() : Array<IfcCompositeCurveSegment>
    {
        if ( this.Segments_ === void 0 )
        {
            
        }

        return this.Segments_ as Array<IfcCompositeCurveSegment>;
    }


    public get SelfIntersect() : boolean
    {
        if ( this.SelfIntersect_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SelfIntersect due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SelfIntersect' );
            };

            this.SelfIntersect_ = value;
        }

        return this.SelfIntersect_ as boolean;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
