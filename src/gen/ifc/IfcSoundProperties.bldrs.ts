import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcSoundScaleEnum, { IfcSoundScaleEnumDeserializeStep } from "./IfcSoundScaleEnum.bldrs"
import IfcSoundValue from "./IfcSoundValue.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsoundproperties.htm */
export default  class IfcSoundProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSOUNDPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private IsAttenuating_? : IfcBoolean;
    private SoundScale_? : IfcSoundScaleEnum | null;
    private SoundValues_? : Array<IfcSoundValue>;


    public get IsAttenuating() : IfcBoolean
    {
        if ( this.IsAttenuating_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IsAttenuating due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field IsAttenuating' );
            };

            this.IsAttenuating_ = value;
        }

        return this.IsAttenuating_ as IfcBoolean;
    }


    public get SoundScale() : IfcSoundScaleEnum | null
    {
        if ( this.SoundScale_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SoundScale due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcSoundScaleEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field SoundScale' );
                }

                this.SoundScale_ = null;                
            }
            else
            {
                this.SoundScale_ = value;
            }
        }

        return this.SoundScale_ as IfcSoundScaleEnum | null;
    }


    public get SoundValues() : Array<IfcSoundValue>
    {
        if ( this.SoundValues_ === void 0 )
        {
            
        }

        return this.SoundValues_ as Array<IfcSoundValue>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
