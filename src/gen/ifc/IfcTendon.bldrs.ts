import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTendonTypeEnum, { IfcTendonTypeEnumDeserializeStep } from "./IfcTendonTypeEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcReinforcingElement from "./IfcReinforcingElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctendon.htm */
export default  class IfcTendon extends IfcReinforcingElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTENDON;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PredefinedType_? : IfcTendonTypeEnum;
    private NominalDiameter_? : IfcPositiveLengthMeasure;
    private CrossSectionArea_? : IfcAreaMeasure;
    private TensionForce_? : IfcForceMeasure | null;
    private PreStress_? : IfcPressureMeasure | null;
    private FrictionCoefficient_? : IfcNormalisedRatioMeasure | null;
    private AnchorageSlip_? : IfcPositiveLengthMeasure | null;
    private MinCurvatureRadius_? : IfcPositiveLengthMeasure | null;


    public get PredefinedType() : IfcTendonTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PredefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcTendonTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PredefinedType' );
            };

            this.PredefinedType_ = value;
        }

        return this.PredefinedType_ as IfcTendonTypeEnum;
    }


    public get NominalDiameter() : IfcPositiveLengthMeasure
    {
        if ( this.NominalDiameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field NominalDiameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

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

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CrossSectionArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

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


    public get TensionForce() : IfcForceMeasure | null
    {
        if ( this.TensionForce_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TensionForce due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TensionForce' );
                }

                this.TensionForce_ = null;                
            }
            else
            {
                this.TensionForce_ = value;
            }
        }

        return this.TensionForce_ as IfcForceMeasure | null;
    }


    public get PreStress() : IfcPressureMeasure | null
    {
        if ( this.PreStress_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PreStress due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PreStress' );
                }

                this.PreStress_ = null;                
            }
            else
            {
                this.PreStress_ = value;
            }
        }

        return this.PreStress_ as IfcPressureMeasure | null;
    }


    public get FrictionCoefficient() : IfcNormalisedRatioMeasure | null
    {
        if ( this.FrictionCoefficient_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FrictionCoefficient due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FrictionCoefficient' );
                }

                this.FrictionCoefficient_ = null;                
            }
            else
            {
                this.FrictionCoefficient_ = value;
            }
        }

        return this.FrictionCoefficient_ as IfcNormalisedRatioMeasure | null;
    }


    public get AnchorageSlip() : IfcPositiveLengthMeasure | null
    {
        if ( this.AnchorageSlip_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AnchorageSlip due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field AnchorageSlip' );
                }

                this.AnchorageSlip_ = null;                
            }
            else
            {
                this.AnchorageSlip_ = value;
            }
        }

        return this.AnchorageSlip_ as IfcPositiveLengthMeasure | null;
    }


    public get MinCurvatureRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.MinCurvatureRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinCurvatureRadius due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MinCurvatureRadius' );
                }

                this.MinCurvatureRadius_ = null;                
            }
            else
            {
                this.MinCurvatureRadius_ = value;
            }
        }

        return this.MinCurvatureRadius_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
