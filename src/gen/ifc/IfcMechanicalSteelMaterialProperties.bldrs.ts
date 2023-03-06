import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcModulusOfElasticityMeasure from "./IfcModulusOfElasticityMeasure.bldrs"
import IfcRelaxation from "./IfcRelaxation.bldrs"
import IfcMechanicalMaterialProperties from "./IfcMechanicalMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmechanicalsteelmaterialproperties.htm */
export default  class IfcMechanicalSteelMaterialProperties extends IfcMechanicalMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMECHANICALSTEELMATERIALPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private YieldStress_? : IfcPressureMeasure | null;
    private UltimateStress_? : IfcPressureMeasure | null;
    private UltimateStrain_? : IfcPositiveRatioMeasure | null;
    private HardeningModule_? : IfcModulusOfElasticityMeasure | null;
    private ProportionalStress_? : IfcPressureMeasure | null;
    private PlasticStrain_? : IfcPositiveRatioMeasure | null;
    private Relaxations_? : Array<IfcRelaxation> | null;


    public get YieldStress() : IfcPressureMeasure | null
    {
        if ( this.YieldStress_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field YieldStress due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field YieldStress' );
                }

                this.YieldStress_ = null;                
            }
            else
            {
                this.YieldStress_ = value;
            }
        }

        return this.YieldStress_ as IfcPressureMeasure | null;
    }


    public get UltimateStress() : IfcPressureMeasure | null
    {
        if ( this.UltimateStress_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UltimateStress due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field UltimateStress' );
                }

                this.UltimateStress_ = null;                
            }
            else
            {
                this.UltimateStress_ = value;
            }
        }

        return this.UltimateStress_ as IfcPressureMeasure | null;
    }


    public get UltimateStrain() : IfcPositiveRatioMeasure | null
    {
        if ( this.UltimateStrain_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UltimateStrain due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UltimateStrain' );
                }

                this.UltimateStrain_ = null;                
            }
            else
            {
                this.UltimateStrain_ = value;
            }
        }

        return this.UltimateStrain_ as IfcPositiveRatioMeasure | null;
    }


    public get HardeningModule() : IfcModulusOfElasticityMeasure | null
    {
        if ( this.HardeningModule_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field HardeningModule due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field HardeningModule' );
                }

                this.HardeningModule_ = null;                
            }
            else
            {
                this.HardeningModule_ = value;
            }
        }

        return this.HardeningModule_ as IfcModulusOfElasticityMeasure | null;
    }


    public get ProportionalStress() : IfcPressureMeasure | null
    {
        if ( this.ProportionalStress_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ProportionalStress due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ProportionalStress' );
                }

                this.ProportionalStress_ = null;                
            }
            else
            {
                this.ProportionalStress_ = value;
            }
        }

        return this.ProportionalStress_ as IfcPressureMeasure | null;
    }


    public get PlasticStrain() : IfcPositiveRatioMeasure | null
    {
        if ( this.PlasticStrain_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PlasticStrain due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field PlasticStrain' );
                }

                this.PlasticStrain_ = null;                
            }
            else
            {
                this.PlasticStrain_ = value;
            }
        }

        return this.PlasticStrain_ as IfcPositiveRatioMeasure | null;
    }


    public get Relaxations() : Array<IfcRelaxation> | null
    {
        if ( this.Relaxations_ === void 0 )
        {
            
        }

        return this.Relaxations_ as Array<IfcRelaxation> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
