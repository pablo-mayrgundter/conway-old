import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTransportElementTypeEnum, { IfcTransportElementTypeEnumDeserializeStep } from "./IfcTransportElementTypeEnum.bldrs"
import IfcMassMeasure from "./IfcMassMeasure.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"
import IfcElement from "./IfcElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctransportelement.htm */
export default  class IfcTransportElement extends IfcElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTRANSPORTELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private OperationType_? : IfcTransportElementTypeEnum | null;
    private CapacityByWeight_? : IfcMassMeasure | null;
    private CapacityByNumber_? : IfcCountMeasure | null;


    public get OperationType() : IfcTransportElementTypeEnum | null
    {
        if ( this.OperationType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field OperationType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcTransportElementTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field OperationType' );
                }

                this.OperationType_ = null;                
            }
            else
            {
                this.OperationType_ = value;
            }
        }

        return this.OperationType_ as IfcTransportElementTypeEnum | null;
    }


    public get CapacityByWeight() : IfcMassMeasure | null
    {
        if ( this.CapacityByWeight_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CapacityByWeight due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CapacityByWeight' );
                }

                this.CapacityByWeight_ = null;                
            }
            else
            {
                this.CapacityByWeight_ = value;
            }
        }

        return this.CapacityByWeight_ as IfcMassMeasure | null;
    }


    public get CapacityByNumber() : IfcCountMeasure | null
    {
        if ( this.CapacityByNumber_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CapacityByNumber due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CapacityByNumber' );
                }

                this.CapacityByNumber_ = null;                
            }
            else
            {
                this.CapacityByNumber_ = value;
            }
        }

        return this.CapacityByNumber_ as IfcCountMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
