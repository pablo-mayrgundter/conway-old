import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"
import IfcObjectTypeEnum, { IfcObjectTypeEnumDeserializeStep } from "./IfcObjectTypeEnum.bldrs"
import IfcRelationship from "./IfcRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassigns.htm */
export default abstract class IfcRelAssigns extends IfcRelationship 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSIGNS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatedObjects_? : Array<IfcObjectDefinition>;
    private RelatedObjectsType_? : IfcObjectTypeEnum | null;


    public get RelatedObjects() : Array<IfcObjectDefinition>
    {
        if ( this.RelatedObjects_ === void 0 )
        {
            
        }

        return this.RelatedObjects_ as Array<IfcObjectDefinition>;
    }


    public get RelatedObjectsType() : IfcObjectTypeEnum | null
    {
        if ( this.RelatedObjectsType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RelatedObjectsType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcObjectTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RelatedObjectsType' );
                }

                this.RelatedObjectsType_ = null;                
            }
            else
            {
                this.RelatedObjectsType_ = value;
            }
        }

        return this.RelatedObjectsType_ as IfcObjectTypeEnum | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
