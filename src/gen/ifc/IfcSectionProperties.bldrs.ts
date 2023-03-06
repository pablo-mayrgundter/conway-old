import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSectionTypeEnum, { IfcSectionTypeEnumDeserializeStep } from "./IfcSectionTypeEnum.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsectionproperties.htm */
export default  class IfcSectionProperties extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSECTIONPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SectionType_? : IfcSectionTypeEnum;
    private StartProfile_? : IfcProfileDef;
    private EndProfile_? : IfcProfileDef | null;


    public get SectionType() : IfcSectionTypeEnum
    {
        if ( this.SectionType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SectionType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcSectionTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SectionType' );
            };

            this.SectionType_ = value;
        }

        return this.SectionType_ as IfcSectionTypeEnum;
    }


    public get StartProfile() : IfcProfileDef
    {
        if ( this.StartProfile_ === void 0 )
        {
            
        }

        return this.StartProfile_ as IfcProfileDef;
    }


    public get EndProfile() : IfcProfileDef | null
    {
        if ( this.EndProfile_ === void 0 )
        {
            
        }

        return this.EndProfile_ as IfcProfileDef | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
