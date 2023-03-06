import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcReinforcingElement from "./IfcReinforcingElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcingmesh.htm */
export default  class IfcReinforcingMesh extends IfcReinforcingElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREINFORCINGMESH;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MeshLength_? : IfcPositiveLengthMeasure | null;
    private MeshWidth_? : IfcPositiveLengthMeasure | null;
    private LongitudinalBarNominalDiameter_? : IfcPositiveLengthMeasure;
    private TransverseBarNominalDiameter_? : IfcPositiveLengthMeasure;
    private LongitudinalBarCrossSectionArea_? : IfcAreaMeasure;
    private TransverseBarCrossSectionArea_? : IfcAreaMeasure;
    private LongitudinalBarSpacing_? : IfcPositiveLengthMeasure;
    private TransverseBarSpacing_? : IfcPositiveLengthMeasure;


    public get MeshLength() : IfcPositiveLengthMeasure | null
    {
        if ( this.MeshLength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MeshLength due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MeshLength' );
                }

                this.MeshLength_ = null;                
            }
            else
            {
                this.MeshLength_ = value;
            }
        }

        return this.MeshLength_ as IfcPositiveLengthMeasure | null;
    }


    public get MeshWidth() : IfcPositiveLengthMeasure | null
    {
        if ( this.MeshWidth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MeshWidth due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MeshWidth' );
                }

                this.MeshWidth_ = null;                
            }
            else
            {
                this.MeshWidth_ = value;
            }
        }

        return this.MeshWidth_ as IfcPositiveLengthMeasure | null;
    }


    public get LongitudinalBarNominalDiameter() : IfcPositiveLengthMeasure
    {
        if ( this.LongitudinalBarNominalDiameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongitudinalBarNominalDiameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LongitudinalBarNominalDiameter' );
            };

            this.LongitudinalBarNominalDiameter_ = value;
        }

        return this.LongitudinalBarNominalDiameter_ as IfcPositiveLengthMeasure;
    }


    public get TransverseBarNominalDiameter() : IfcPositiveLengthMeasure
    {
        if ( this.TransverseBarNominalDiameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransverseBarNominalDiameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TransverseBarNominalDiameter' );
            };

            this.TransverseBarNominalDiameter_ = value;
        }

        return this.TransverseBarNominalDiameter_ as IfcPositiveLengthMeasure;
    }


    public get LongitudinalBarCrossSectionArea() : IfcAreaMeasure
    {
        if ( this.LongitudinalBarCrossSectionArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongitudinalBarCrossSectionArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LongitudinalBarCrossSectionArea' );
            };

            this.LongitudinalBarCrossSectionArea_ = value;
        }

        return this.LongitudinalBarCrossSectionArea_ as IfcAreaMeasure;
    }


    public get TransverseBarCrossSectionArea() : IfcAreaMeasure
    {
        if ( this.TransverseBarCrossSectionArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransverseBarCrossSectionArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TransverseBarCrossSectionArea' );
            };

            this.TransverseBarCrossSectionArea_ = value;
        }

        return this.TransverseBarCrossSectionArea_ as IfcAreaMeasure;
    }


    public get LongitudinalBarSpacing() : IfcPositiveLengthMeasure
    {
        if ( this.LongitudinalBarSpacing_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongitudinalBarSpacing due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LongitudinalBarSpacing' );
            };

            this.LongitudinalBarSpacing_ = value;
        }

        return this.LongitudinalBarSpacing_ as IfcPositiveLengthMeasure;
    }


    public get TransverseBarSpacing() : IfcPositiveLengthMeasure
    {
        if ( this.TransverseBarSpacing_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransverseBarSpacing due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TransverseBarSpacing' );
            };

            this.TransverseBarSpacing_ = value;
        }

        return this.TransverseBarSpacing_ as IfcPositiveLengthMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
