import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPoint from "./IfcPoint.bldrs"
import IfcGlobalOrLocalEnum, { IfcGlobalOrLocalEnumDeserializeStep } from "./IfcGlobalOrLocalEnum.bldrs"
import IfcAnnotationOccurrence from "./IfcAnnotationOccurrence.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcannotationfillareaoccurrence.htm */
export default  class IfcAnnotationFillAreaOccurrence extends IfcAnnotationOccurrence 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCANNOTATIONFILLAREAOCCURRENCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private FillStyleTarget_? : IfcPoint | null;
    private GlobalOrLocal_? : IfcGlobalOrLocalEnum | null;


    public get FillStyleTarget() : IfcPoint | null
    {
        if ( this.FillStyleTarget_ === void 0 )
        {
            
        }

        return this.FillStyleTarget_ as IfcPoint | null;
    }


    public get GlobalOrLocal() : IfcGlobalOrLocalEnum | null
    {
        if ( this.GlobalOrLocal_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field GlobalOrLocal due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcGlobalOrLocalEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field GlobalOrLocal' );
                }

                this.GlobalOrLocal_ = null;                
            }
            else
            {
                this.GlobalOrLocal_ = value;
            }
        }

        return this.GlobalOrLocal_ as IfcGlobalOrLocalEnum | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
