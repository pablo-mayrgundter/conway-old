import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcMechanicalMaterialProperties from "./IfcMechanicalMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmechanicalconcretematerialproperties.htm */
export default  class IfcMechanicalConcreteMaterialProperties extends IfcMechanicalMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMECHANICALCONCRETEMATERIALPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private CompressiveStrength_? : IfcPressureMeasure | null;
    private MaxAggregateSize_? : IfcPositiveLengthMeasure | null;
    private AdmixturesDescription_? : IfcText | null;
    private Workability_? : IfcText | null;
    private ProtectivePoreRatio_? : IfcNormalisedRatioMeasure | null;
    private WaterImpermeability_? : IfcText | null;


    public get CompressiveStrength() : IfcPressureMeasure | null
    {
        if ( this.CompressiveStrength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CompressiveStrength due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CompressiveStrength' );
                }

                this.CompressiveStrength_ = null;                
            }
            else
            {
                this.CompressiveStrength_ = value;
            }
        }

        return this.CompressiveStrength_ as IfcPressureMeasure | null;
    }


    public get MaxAggregateSize() : IfcPositiveLengthMeasure | null
    {
        if ( this.MaxAggregateSize_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MaxAggregateSize due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MaxAggregateSize' );
                }

                this.MaxAggregateSize_ = null;                
            }
            else
            {
                this.MaxAggregateSize_ = value;
            }
        }

        return this.MaxAggregateSize_ as IfcPositiveLengthMeasure | null;
    }


    public get AdmixturesDescription() : IfcText | null
    {
        if ( this.AdmixturesDescription_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AdmixturesDescription due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field AdmixturesDescription' );
                }

                this.AdmixturesDescription_ = null;                
            }
            else
            {
                this.AdmixturesDescription_ = value;
            }
        }

        return this.AdmixturesDescription_ as IfcText | null;
    }


    public get Workability() : IfcText | null
    {
        if ( this.Workability_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Workability due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Workability' );
                }

                this.Workability_ = null;                
            }
            else
            {
                this.Workability_ = value;
            }
        }

        return this.Workability_ as IfcText | null;
    }


    public get ProtectivePoreRatio() : IfcNormalisedRatioMeasure | null
    {
        if ( this.ProtectivePoreRatio_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ProtectivePoreRatio due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ProtectivePoreRatio' );
                }

                this.ProtectivePoreRatio_ = null;                
            }
            else
            {
                this.ProtectivePoreRatio_ = value;
            }
        }

        return this.ProtectivePoreRatio_ as IfcNormalisedRatioMeasure | null;
    }


    public get WaterImpermeability() : IfcText | null
    {
        if ( this.WaterImpermeability_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WaterImpermeability due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field WaterImpermeability' );
                }

                this.WaterImpermeability_ = null;                
            }
            else
            {
                this.WaterImpermeability_ = value;
            }
        }

        return this.WaterImpermeability_ as IfcText | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
