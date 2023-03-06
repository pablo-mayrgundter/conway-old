import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcParameterizedProfileDef from "./IfcParameterizedProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccshapeprofiledef.htm */
export default  class IfcCShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCSHAPEPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Depth_? : IfcPositiveLengthMeasure;
    private Width_? : IfcPositiveLengthMeasure;
    private WallThickness_? : IfcPositiveLengthMeasure;
    private Girth_? : IfcPositiveLengthMeasure;
    private InternalFilletRadius_? : IfcPositiveLengthMeasure | null;
    private CentreOfGravityInX_? : IfcPositiveLengthMeasure | null;


    public get Depth() : IfcPositiveLengthMeasure
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

        return this.Depth_ as IfcPositiveLengthMeasure;
    }


    public get Width() : IfcPositiveLengthMeasure
    {
        if ( this.Width_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Width due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Width' );
            };

            this.Width_ = value;
        }

        return this.Width_ as IfcPositiveLengthMeasure;
    }


    public get WallThickness() : IfcPositiveLengthMeasure
    {
        if ( this.WallThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WallThickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field WallThickness' );
            };

            this.WallThickness_ = value;
        }

        return this.WallThickness_ as IfcPositiveLengthMeasure;
    }


    public get Girth() : IfcPositiveLengthMeasure
    {
        if ( this.Girth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Girth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Girth' );
            };

            this.Girth_ = value;
        }

        return this.Girth_ as IfcPositiveLengthMeasure;
    }


    public get InternalFilletRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.InternalFilletRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InternalFilletRadius due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field InternalFilletRadius' );
                }

                this.InternalFilletRadius_ = null;                
            }
            else
            {
                this.InternalFilletRadius_ = value;
            }
        }

        return this.InternalFilletRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get CentreOfGravityInX() : IfcPositiveLengthMeasure | null
    {
        if ( this.CentreOfGravityInX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInX due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInX' );
                }

                this.CentreOfGravityInX_ = null;                
            }
            else
            {
                this.CentreOfGravityInX_ = value;
            }
        }

        return this.CentreOfGravityInX_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
