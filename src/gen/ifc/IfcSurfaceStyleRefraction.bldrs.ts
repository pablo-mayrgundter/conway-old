import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcReal from "./IfcReal.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestylerefraction.htm */
export default  class IfcSurfaceStyleRefraction extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACESTYLEREFRACTION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RefractionIndex_? : IfcReal | null;
    private DispersionFactor_? : IfcReal | null;


    public get RefractionIndex() : IfcReal | null
    {
        if ( this.RefractionIndex_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RefractionIndex due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RefractionIndex' );
                }

                this.RefractionIndex_ = null;                
            }
            else
            {
                this.RefractionIndex_ = value;
            }
        }

        return this.RefractionIndex_ as IfcReal | null;
    }


    public get DispersionFactor() : IfcReal | null
    {
        if ( this.DispersionFactor_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DispersionFactor due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DispersionFactor' );
                }

                this.DispersionFactor_ = null;                
            }
            else
            {
                this.DispersionFactor_ = value;
            }
        }

        return this.DispersionFactor_ as IfcReal | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
