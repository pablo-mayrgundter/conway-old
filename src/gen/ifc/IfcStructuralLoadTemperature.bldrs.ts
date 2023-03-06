import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcStructuralLoadStatic from "./IfcStructuralLoadStatic.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadtemperature.htm */
export default  class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALLOADTEMPERATURE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DeltaT_Constant_? : IfcThermodynamicTemperatureMeasure | null;
    private DeltaT_Y_? : IfcThermodynamicTemperatureMeasure | null;
    private DeltaT_Z_? : IfcThermodynamicTemperatureMeasure | null;


    public get DeltaT_Constant() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.DeltaT_Constant_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DeltaT_Constant due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field DeltaT_Constant' );
                }

                this.DeltaT_Constant_ = null;                
            }
            else
            {
                this.DeltaT_Constant_ = value;
            }
        }

        return this.DeltaT_Constant_ as IfcThermodynamicTemperatureMeasure | null;
    }


    public get DeltaT_Y() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.DeltaT_Y_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DeltaT_Y due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DeltaT_Y' );
                }

                this.DeltaT_Y_ = null;                
            }
            else
            {
                this.DeltaT_Y_ = value;
            }
        }

        return this.DeltaT_Y_ as IfcThermodynamicTemperatureMeasure | null;
    }


    public get DeltaT_Z() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.DeltaT_Z_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DeltaT_Z due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DeltaT_Z' );
                }

                this.DeltaT_Z_ = null;                
            }
            else
            {
                this.DeltaT_Z_ = value;
            }
        }

        return this.DeltaT_Z_ as IfcThermodynamicTemperatureMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
