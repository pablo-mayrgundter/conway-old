import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcArithmeticOperatorEnum, { IfcArithmeticOperatorEnumDeserializeStep } from "./IfcArithmeticOperatorEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcappliedvaluerelationship.htm */
export default  class IfcAppliedValueRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCAPPLIEDVALUERELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ComponentOfTotal_? : IfcAppliedValue;
    private Components_? : Array<IfcAppliedValue>;
    private ArithmeticOperator_? : IfcArithmeticOperatorEnum;
    private Name_? : IfcLabel | null;
    private Description_? : IfcText | null;


    public get ComponentOfTotal() : IfcAppliedValue
    {
        if ( this.ComponentOfTotal_ === void 0 )
        {
            
        }

        return this.ComponentOfTotal_ as IfcAppliedValue;
    }


    public get Components() : Array<IfcAppliedValue>
    {
        if ( this.Components_ === void 0 )
        {
            
        }

        return this.Components_ as Array<IfcAppliedValue>;
    }


    public get ArithmeticOperator() : IfcArithmeticOperatorEnum
    {
        if ( this.ArithmeticOperator_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ArithmeticOperator due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcArithmeticOperatorEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ArithmeticOperator' );
            };

            this.ArithmeticOperator_ = value;
        }

        return this.ArithmeticOperator_ as IfcArithmeticOperatorEnum;
    }


    public get Name() : IfcLabel | null
    {
        if ( this.Name_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Name due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Name' );
                }

                this.Name_ = null;                
            }
            else
            {
                this.Name_ = value;
            }
        }

        return this.Name_ as IfcLabel | null;
    }


    public get Description() : IfcText | null
    {
        if ( this.Description_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Description due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Description' );
                }

                this.Description_ = null;                
            }
            else
            {
                this.Description_ = value;
            }
        }

        return this.Description_ as IfcText | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
