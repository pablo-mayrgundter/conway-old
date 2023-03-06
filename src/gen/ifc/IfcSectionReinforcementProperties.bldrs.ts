import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcReinforcingBarRoleEnum, { IfcReinforcingBarRoleEnumDeserializeStep } from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcSectionProperties from "./IfcSectionProperties.bldrs"
import IfcReinforcementBarProperties from "./IfcReinforcementBarProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsectionreinforcementproperties.htm */
export default  class IfcSectionReinforcementProperties extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LongitudinalStartPosition_? : IfcLengthMeasure;
    private LongitudinalEndPosition_? : IfcLengthMeasure;
    private TransversePosition_? : IfcLengthMeasure | null;
    private ReinforcementRole_? : IfcReinforcingBarRoleEnum;
    private SectionDefinition_? : IfcSectionProperties;
    private CrossSectionReinforcementDefinitions_? : Array<IfcReinforcementBarProperties>;


    public get LongitudinalStartPosition() : IfcLengthMeasure
    {
        if ( this.LongitudinalStartPosition_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongitudinalStartPosition due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LongitudinalStartPosition' );
            };

            this.LongitudinalStartPosition_ = value;
        }

        return this.LongitudinalStartPosition_ as IfcLengthMeasure;
    }


    public get LongitudinalEndPosition() : IfcLengthMeasure
    {
        if ( this.LongitudinalEndPosition_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongitudinalEndPosition due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LongitudinalEndPosition' );
            };

            this.LongitudinalEndPosition_ = value;
        }

        return this.LongitudinalEndPosition_ as IfcLengthMeasure;
    }


    public get TransversePosition() : IfcLengthMeasure | null
    {
        if ( this.TransversePosition_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransversePosition due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TransversePosition' );
                }

                this.TransversePosition_ = null;                
            }
            else
            {
                this.TransversePosition_ = value;
            }
        }

        return this.TransversePosition_ as IfcLengthMeasure | null;
    }


    public get ReinforcementRole() : IfcReinforcingBarRoleEnum
    {
        if ( this.ReinforcementRole_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ReinforcementRole due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcReinforcingBarRoleEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ReinforcementRole' );
            };

            this.ReinforcementRole_ = value;
        }

        return this.ReinforcementRole_ as IfcReinforcingBarRoleEnum;
    }


    public get SectionDefinition() : IfcSectionProperties
    {
        if ( this.SectionDefinition_ === void 0 )
        {
            
        }

        return this.SectionDefinition_ as IfcSectionProperties;
    }


    public get CrossSectionReinforcementDefinitions() : Array<IfcReinforcementBarProperties>
    {
        if ( this.CrossSectionReinforcementDefinitions_ === void 0 )
        {
            
        }

        return this.CrossSectionReinforcementDefinitions_ as Array<IfcReinforcementBarProperties>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
