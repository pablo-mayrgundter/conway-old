import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIonConcentrationMeasure from "./IfcIonConcentrationMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPHMeasure from "./IfcPHMeasure.bldrs"
import IfcMaterialProperties from "./IfcMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcwaterproperties.htm */
export default  class IfcWaterProperties extends IfcMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCWATERPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private IsPotable_? : boolean | null;
    private Hardness_? : IfcIonConcentrationMeasure | null;
    private AlkalinityConcentration_? : IfcIonConcentrationMeasure | null;
    private AcidityConcentration_? : IfcIonConcentrationMeasure | null;
    private ImpuritiesContent_? : IfcNormalisedRatioMeasure | null;
    private PHLevel_? : IfcPHMeasure | null;
    private DissolvedSolidsContent_? : IfcNormalisedRatioMeasure | null;


    public get IsPotable() : boolean | null
    {
        if ( this.IsPotable_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IsPotable due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field IsPotable' );
                }

                this.IsPotable_ = null;                
            }
            else
            {
                this.IsPotable_ = value;
            }
        }

        return this.IsPotable_ as boolean | null;
    }


    public get Hardness() : IfcIonConcentrationMeasure | null
    {
        if ( this.Hardness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Hardness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Hardness' );
                }

                this.Hardness_ = null;                
            }
            else
            {
                this.Hardness_ = value;
            }
        }

        return this.Hardness_ as IfcIonConcentrationMeasure | null;
    }


    public get AlkalinityConcentration() : IfcIonConcentrationMeasure | null
    {
        if ( this.AlkalinityConcentration_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AlkalinityConcentration due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field AlkalinityConcentration' );
                }

                this.AlkalinityConcentration_ = null;                
            }
            else
            {
                this.AlkalinityConcentration_ = value;
            }
        }

        return this.AlkalinityConcentration_ as IfcIonConcentrationMeasure | null;
    }


    public get AcidityConcentration() : IfcIonConcentrationMeasure | null
    {
        if ( this.AcidityConcentration_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AcidityConcentration due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field AcidityConcentration' );
                }

                this.AcidityConcentration_ = null;                
            }
            else
            {
                this.AcidityConcentration_ = value;
            }
        }

        return this.AcidityConcentration_ as IfcIonConcentrationMeasure | null;
    }


    public get ImpuritiesContent() : IfcNormalisedRatioMeasure | null
    {
        if ( this.ImpuritiesContent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ImpuritiesContent due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ImpuritiesContent' );
                }

                this.ImpuritiesContent_ = null;                
            }
            else
            {
                this.ImpuritiesContent_ = value;
            }
        }

        return this.ImpuritiesContent_ as IfcNormalisedRatioMeasure | null;
    }


    public get PHLevel() : IfcPHMeasure | null
    {
        if ( this.PHLevel_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PHLevel due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field PHLevel' );
                }

                this.PHLevel_ = null;                
            }
            else
            {
                this.PHLevel_ = value;
            }
        }

        return this.PHLevel_ as IfcPHMeasure | null;
    }


    public get DissolvedSolidsContent() : IfcNormalisedRatioMeasure | null
    {
        if ( this.DissolvedSolidsContent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DissolvedSolidsContent due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DissolvedSolidsContent' );
                }

                this.DissolvedSolidsContent_ = null;                
            }
            else
            {
                this.DissolvedSolidsContent_ = value;
            }
        }

        return this.DissolvedSolidsContent_ as IfcNormalisedRatioMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
