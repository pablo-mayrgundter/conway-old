import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcReinforcingBarRoleEnum, { IfcReinforcingBarRoleEnumDeserializeStep } from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcReinforcingBarSurfaceEnum, { IfcReinforcingBarSurfaceEnumDeserializeStep } from "./IfcReinforcingBarSurfaceEnum.bldrs"
import IfcReinforcingElement from "./IfcReinforcingElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcingbar.htm */
export default  class IfcReinforcingBar extends IfcReinforcingElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREINFORCINGBAR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private NominalDiameter_? : IfcPositiveLengthMeasure;
    private CrossSectionArea_? : IfcAreaMeasure;
    private BarLength_? : IfcPositiveLengthMeasure | null;
    private BarRole_? : IfcReinforcingBarRoleEnum;
    private BarSurface_? : IfcReinforcingBarSurfaceEnum | null;


    public get NominalDiameter() : IfcPositiveLengthMeasure
    {
        if ( this.NominalDiameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field NominalDiameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field NominalDiameter' );
            };

            this.NominalDiameter_ = value;
        }

        return this.NominalDiameter_ as IfcPositiveLengthMeasure;
    }


    public get CrossSectionArea() : IfcAreaMeasure
    {
        if ( this.CrossSectionArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CrossSectionArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field CrossSectionArea' );
            };

            this.CrossSectionArea_ = value;
        }

        return this.CrossSectionArea_ as IfcAreaMeasure;
    }


    public get BarLength() : IfcPositiveLengthMeasure | null
    {
        if ( this.BarLength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BarLength due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field BarLength' );
                }

                this.BarLength_ = null;                
            }
            else
            {
                this.BarLength_ = value;
            }
        }

        return this.BarLength_ as IfcPositiveLengthMeasure | null;
    }


    public get BarRole() : IfcReinforcingBarRoleEnum
    {
        if ( this.BarRole_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BarRole due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcReinforcingBarRoleEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field BarRole' );
            };

            this.BarRole_ = value;
        }

        return this.BarRole_ as IfcReinforcingBarRoleEnum;
    }


    public get BarSurface() : IfcReinforcingBarSurfaceEnum | null
    {
        if ( this.BarSurface_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BarSurface due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcReinforcingBarSurfaceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field BarSurface' );
                }

                this.BarSurface_ = null;                
            }
            else
            {
                this.BarSurface_ = value;
            }
        }

        return this.BarSurface_ as IfcReinforcingBarSurfaceEnum | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
