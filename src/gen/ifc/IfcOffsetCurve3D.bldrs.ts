import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcoffsetcurve3d.htm */
export default  class IfcOffsetCurve3D extends IfcCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCOFFSETCURVE3D;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BasisCurve_? : IfcCurve;
    private Distance_? : IfcLengthMeasure;
    private SelfIntersect_? : boolean;
    private RefDirection_? : IfcDirection;


    public get BasisCurve() : IfcCurve
    {
        if ( this.BasisCurve_ === void 0 )
        {
            
        }

        return this.BasisCurve_ as IfcCurve;
    }


    public get Distance() : IfcLengthMeasure
    {
        if ( this.Distance_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Distance due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Distance' );
            };

            this.Distance_ = value;
        }

        return this.Distance_ as IfcLengthMeasure;
    }


    public get SelfIntersect() : boolean
    {
        if ( this.SelfIntersect_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SelfIntersect due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

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


    public get RefDirection() : IfcDirection
    {
        if ( this.RefDirection_ === void 0 )
        {
            
        }

        return this.RefDirection_ as IfcDirection;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
