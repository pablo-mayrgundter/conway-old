import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcBSplineCurveForm, { IfcBSplineCurveFormDeserializeStep } from "./IfcBSplineCurveForm.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbsplinecurve.htm */
export default abstract class IfcBSplineCurve extends IfcBoundedCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBSPLINECURVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Degree_? : number;
    private ControlPointsList_? : Array<IfcCartesianPoint>;
    private CurveForm_? : IfcBSplineCurveForm;
    private ClosedCurve_? : boolean;
    private SelfIntersect_? : boolean;


    public get Degree() : number
    {
        if ( this.Degree_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Degree due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Degree' );
            };

            this.Degree_ = value;
        }

        return this.Degree_ as number;
    }


    public get ControlPointsList() : Array<IfcCartesianPoint>
    {
        if ( this.ControlPointsList_ === void 0 )
        {
            
        }

        return this.ControlPointsList_ as Array<IfcCartesianPoint>;
    }


    public get CurveForm() : IfcBSplineCurveForm
    {
        if ( this.CurveForm_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CurveForm due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcBSplineCurveFormDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field CurveForm' );
            };

            this.CurveForm_ = value;
        }

        return this.CurveForm_ as IfcBSplineCurveForm;
    }


    public get ClosedCurve() : boolean
    {
        if ( this.ClosedCurve_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ClosedCurve due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ClosedCurve' );
            };

            this.ClosedCurve_ = value;
        }

        return this.ClosedCurve_ as boolean;
    }


    public get SelfIntersect() : boolean
    {
        if ( this.SelfIntersect_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SelfIntersect due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

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
