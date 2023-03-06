import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcEnvironmentalImpactCategoryEnum, { IfcEnvironmentalImpactCategoryEnumDeserializeStep } from "./IfcEnvironmentalImpactCategoryEnum.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcenvironmentalimpactvalue.htm */
export default  class IfcEnvironmentalImpactValue extends IfcAppliedValue 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCENVIRONMENTALIMPACTVALUE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ImpactType_? : IfcLabel;
    private Category_? : IfcEnvironmentalImpactCategoryEnum;
    private UserDefinedCategory_? : IfcLabel | null;


    public get ImpactType() : IfcLabel
    {
        if ( this.ImpactType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ImpactType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ImpactType' );
            };

            this.ImpactType_ = value;
        }

        return this.ImpactType_ as IfcLabel;
    }


    public get Category() : IfcEnvironmentalImpactCategoryEnum
    {
        if ( this.Category_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Category due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcEnvironmentalImpactCategoryEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Category' );
            };

            this.Category_ = value;
        }

        return this.Category_ as IfcEnvironmentalImpactCategoryEnum;
    }


    public get UserDefinedCategory() : IfcLabel | null
    {
        if ( this.UserDefinedCategory_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedCategory due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedCategory' );
                }

                this.UserDefinedCategory_ = null;                
            }
            else
            {
                this.UserDefinedCategory_ = value;
            }
        }

        return this.UserDefinedCategory_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
