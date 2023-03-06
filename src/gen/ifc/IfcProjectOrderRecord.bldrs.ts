import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcRelAssignsToProjectOrder from "./IfcRelAssignsToProjectOrder.bldrs"
import IfcProjectOrderRecordTypeEnum, { IfcProjectOrderRecordTypeEnumDeserializeStep } from "./IfcProjectOrderRecordTypeEnum.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcprojectorderrecord.htm */
export default  class IfcProjectOrderRecord extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPROJECTORDERRECORD;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Records_? : Array<IfcRelAssignsToProjectOrder>;
    private PredefinedType_? : IfcProjectOrderRecordTypeEnum;


    public get Records() : Array<IfcRelAssignsToProjectOrder>
    {
        if ( this.Records_ === void 0 )
        {
            
        }

        return this.Records_ as Array<IfcRelAssignsToProjectOrder>;
    }


    public get PredefinedType() : IfcProjectOrderRecordTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PredefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcProjectOrderRecordTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PredefinedType' );
            };

            this.PredefinedType_ = value;
        }

        return this.PredefinedType_ as IfcProjectOrderRecordTypeEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
