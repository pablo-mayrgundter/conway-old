import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcIShapeProfileDef from "./IfcIShapeProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcasymmetricishapeprofiledef.htm */
export default  class IfcAsymmetricIShapeProfileDef extends IfcIShapeProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCASYMMETRICISHAPEPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TopFlangeWidth_? : IfcPositiveLengthMeasure;
    private TopFlangeThickness_? : IfcPositiveLengthMeasure | null;
    private TopFlangeFilletRadius_? : IfcPositiveLengthMeasure | null;
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure | null;


    public get TopFlangeWidth() : IfcPositiveLengthMeasure
    {
        if ( this.TopFlangeWidth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TopFlangeWidth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TopFlangeWidth' );
            };

            this.TopFlangeWidth_ = value;
        }

        return this.TopFlangeWidth_ as IfcPositiveLengthMeasure;
    }


    public get TopFlangeThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.TopFlangeThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TopFlangeThickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TopFlangeThickness' );
                }

                this.TopFlangeThickness_ = null;                
            }
            else
            {
                this.TopFlangeThickness_ = value;
            }
        }

        return this.TopFlangeThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get TopFlangeFilletRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.TopFlangeFilletRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TopFlangeFilletRadius due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TopFlangeFilletRadius' );
                }

                this.TopFlangeFilletRadius_ = null;                
            }
            else
            {
                this.TopFlangeFilletRadius_ = value;
            }
        }

        return this.TopFlangeFilletRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get CentreOfGravityInY() : IfcPositiveLengthMeasure | null
    {
        if ( this.CentreOfGravityInY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInY' );
                }

                this.CentreOfGravityInY_ = null;                
            }
            else
            {
                this.CentreOfGravityInY_ = value;
            }
        }

        return this.CentreOfGravityInY_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
