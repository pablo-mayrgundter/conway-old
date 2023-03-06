import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcConnectionTypeEnum, { IfcConnectionTypeEnumDeserializeStep } from "./IfcConnectionTypeEnum.bldrs"
import IfcRelConnectsElements from "./IfcRelConnectsElements.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectspathelements.htm */
export default  class IfcRelConnectsPathElements extends IfcRelConnectsElements 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingPriorities_? : Array<number>;
    private RelatedPriorities_? : Array<number>;
    private RelatedConnectionType_? : IfcConnectionTypeEnum;
    private RelatingConnectionType_? : IfcConnectionTypeEnum;


    public get RelatingPriorities() : Array<number>
    {
        if ( this.RelatingPriorities_ === void 0 )
        {
            
        }

        return this.RelatingPriorities_ as Array<number>;
    }


    public get RelatedPriorities() : Array<number>
    {
        if ( this.RelatedPriorities_ === void 0 )
        {
            
        }

        return this.RelatedPriorities_ as Array<number>;
    }


    public get RelatedConnectionType() : IfcConnectionTypeEnum
    {
        if ( this.RelatedConnectionType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RelatedConnectionType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcConnectionTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field RelatedConnectionType' );
            };

            this.RelatedConnectionType_ = value;
        }

        return this.RelatedConnectionType_ as IfcConnectionTypeEnum;
    }


    public get RelatingConnectionType() : IfcConnectionTypeEnum
    {
        if ( this.RelatingConnectionType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RelatingConnectionType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcConnectionTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field RelatingConnectionType' );
            };

            this.RelatingConnectionType_ = value;
        }

        return this.RelatingConnectionType_ as IfcConnectionTypeEnum;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
