import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTextFontName from "./IfcTextFontName.bldrs"
import IfcFontStyle from "./IfcFontStyle.bldrs"
import IfcFontVariant from "./IfcFontVariant.bldrs"
import IfcFontWeight from "./IfcFontWeight.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcPreDefinedTextFont from "./IfcPreDefinedTextFont.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstylefontmodel.htm */
export default  class IfcTextStyleFontModel extends IfcPreDefinedTextFont 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTSTYLEFONTMODEL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private FontFamily_? : Array<IfcTextFontName> | null;
    private FontStyle_? : IfcFontStyle | null;
    private FontVariant_? : IfcFontVariant | null;
    private FontWeight_? : IfcFontWeight | null;
    private FontSize_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure;


    public get FontFamily() : Array<IfcTextFontName> | null
    {
        if ( this.FontFamily_ === void 0 )
        {
            
        }

        return this.FontFamily_ as Array<IfcTextFontName> | null;
    }


    public get FontStyle() : IfcFontStyle | null
    {
        if ( this.FontStyle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FontStyle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FontStyle' );
                }

                this.FontStyle_ = null;                
            }
            else
            {
                this.FontStyle_ = value;
            }
        }

        return this.FontStyle_ as IfcFontStyle | null;
    }


    public get FontVariant() : IfcFontVariant | null
    {
        if ( this.FontVariant_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FontVariant due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FontVariant' );
                }

                this.FontVariant_ = null;                
            }
            else
            {
                this.FontVariant_ = value;
            }
        }

        return this.FontVariant_ as IfcFontVariant | null;
    }


    public get FontWeight() : IfcFontWeight | null
    {
        if ( this.FontWeight_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FontWeight due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FontWeight' );
                }

                this.FontWeight_ = null;                
            }
            else
            {
                this.FontWeight_ = value;
            }
        }

        return this.FontWeight_ as IfcFontWeight | null;
    }


    public get FontSize() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure
    {
        if ( this.FontSize_ === void 0 )
        {
            
        }

        return this.FontSize_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
