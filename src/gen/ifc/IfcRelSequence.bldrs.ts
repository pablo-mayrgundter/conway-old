import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProcess from "./IfcProcess.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcSequenceEnum, { IfcSequenceEnumDeserializeStep } from "./IfcSequenceEnum.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelsequence.htm */
export default  class IfcRelSequence extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELSEQUENCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingProcess_? : IfcProcess;
    private RelatedProcess_? : IfcProcess;
    private TimeLag_? : IfcTimeMeasure;
    private SequenceType_? : IfcSequenceEnum;


    public get RelatingProcess() : IfcProcess
    {
        if ( this.RelatingProcess_ === void 0 )
        {
            
        }

        return this.RelatingProcess_ as IfcProcess;
    }


    public get RelatedProcess() : IfcProcess
    {
        if ( this.RelatedProcess_ === void 0 )
        {
            
        }

        return this.RelatedProcess_ as IfcProcess;
    }


    public get TimeLag() : IfcTimeMeasure
    {
        if ( this.TimeLag_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TimeLag due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TimeLag' );
            };

            this.TimeLag_ = value;
        }

        return this.TimeLag_ as IfcTimeMeasure;
    }


    public get SequenceType() : IfcSequenceEnum
    {
        if ( this.SequenceType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SequenceType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcSequenceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SequenceType' );
            };

            this.SequenceType_ = value;
        }

        return this.SequenceType_ as IfcSequenceEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
