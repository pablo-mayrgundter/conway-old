import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcReinforcingBarSurfaceEnum, { IfcReinforcingBarSurfaceEnumDeserializeStep } from "./IfcReinforcingBarSurfaceEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcementbarproperties.htm */
export default  class IfcReinforcementBarProperties extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREINFORCEMENTBARPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TotalCrossSectionArea_? : IfcAreaMeasure;
    private SteelGrade_? : IfcLabel;
    private BarSurface_? : IfcReinforcingBarSurfaceEnum | null;
    private EffectiveDepth_? : IfcLengthMeasure | null;
    private NominalBarDiameter_? : IfcPositiveLengthMeasure | null;
    private BarCount_? : IfcCountMeasure | null;


    public get TotalCrossSectionArea() : IfcAreaMeasure
    {
        if ( this.TotalCrossSectionArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TotalCrossSectionArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TotalCrossSectionArea' );
            };

            this.TotalCrossSectionArea_ = value;
        }

        return this.TotalCrossSectionArea_ as IfcAreaMeasure;
    }


    public get SteelGrade() : IfcLabel
    {
        if ( this.SteelGrade_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SteelGrade due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SteelGrade' );
            };

            this.SteelGrade_ = value;
        }

        return this.SteelGrade_ as IfcLabel;
    }


    public get BarSurface() : IfcReinforcingBarSurfaceEnum | null
    {
        if ( this.BarSurface_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BarSurface due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

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


    public get EffectiveDepth() : IfcLengthMeasure | null
    {
        if ( this.EffectiveDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field EffectiveDepth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field EffectiveDepth' );
                }

                this.EffectiveDepth_ = null;                
            }
            else
            {
                this.EffectiveDepth_ = value;
            }
        }

        return this.EffectiveDepth_ as IfcLengthMeasure | null;
    }


    public get NominalBarDiameter() : IfcPositiveLengthMeasure | null
    {
        if ( this.NominalBarDiameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field NominalBarDiameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field NominalBarDiameter' );
                }

                this.NominalBarDiameter_ = null;                
            }
            else
            {
                this.NominalBarDiameter_ = value;
            }
        }

        return this.NominalBarDiameter_ as IfcPositiveLengthMeasure | null;
    }


    public get BarCount() : IfcCountMeasure | null
    {
        if ( this.BarCount_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BarCount due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field BarCount' );
                }

                this.BarCount_ = null;                
            }
            else
            {
                this.BarCount_ = value;
            }
        }

        return this.BarCount_ as IfcCountMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
