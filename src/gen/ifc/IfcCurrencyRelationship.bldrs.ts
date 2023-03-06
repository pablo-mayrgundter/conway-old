import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurrencyrelationship.htm */
export default  class IfcCurrencyRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCURRENCYRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingMonetaryUnit_? : IfcMonetaryUnit;
    private RelatedMonetaryUnit_? : IfcMonetaryUnit;
    private ExchangeRate_? : IfcPositiveRatioMeasure;
    private RateDateTime_? : IfcDateAndTime;
    private RateSource_? : IfcLibraryInformation | null;


    public get RelatingMonetaryUnit() : IfcMonetaryUnit
    {
        if ( this.RelatingMonetaryUnit_ === void 0 )
        {
            
        }

        return this.RelatingMonetaryUnit_ as IfcMonetaryUnit;
    }


    public get RelatedMonetaryUnit() : IfcMonetaryUnit
    {
        if ( this.RelatedMonetaryUnit_ === void 0 )
        {
            
        }

        return this.RelatedMonetaryUnit_ as IfcMonetaryUnit;
    }


    public get ExchangeRate() : IfcPositiveRatioMeasure
    {
        if ( this.ExchangeRate_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ExchangeRate due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ExchangeRate' );
            };

            this.ExchangeRate_ = value;
        }

        return this.ExchangeRate_ as IfcPositiveRatioMeasure;
    }


    public get RateDateTime() : IfcDateAndTime
    {
        if ( this.RateDateTime_ === void 0 )
        {
            
        }

        return this.RateDateTime_ as IfcDateAndTime;
    }


    public get RateSource() : IfcLibraryInformation | null
    {
        if ( this.RateSource_ === void 0 )
        {
            
        }

        return this.RateSource_ as IfcLibraryInformation | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
