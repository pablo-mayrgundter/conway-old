import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcInventoryTypeEnum, { IfcInventoryTypeEnumDeserializeStep } from "./IfcInventoryTypeEnum.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcinventory.htm */
export default  class IfcInventory extends IfcGroup 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCINVENTORY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private InventoryType_? : IfcInventoryTypeEnum;
    private Jurisdiction_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    private ResponsiblePersons_? : Array<IfcPerson>;
    private LastUpdateDate_? : IfcCalendarDate;
    private CurrentValue_? : IfcCostValue | null;
    private OriginalValue_? : IfcCostValue | null;


    public get InventoryType() : IfcInventoryTypeEnum
    {
        if ( this.InventoryType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InventoryType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcInventoryTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field InventoryType' );
            };

            this.InventoryType_ = value;
        }

        return this.InventoryType_ as IfcInventoryTypeEnum;
    }


    public get Jurisdiction() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.Jurisdiction_ === void 0 )
        {
            
        }

        return this.Jurisdiction_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }


    public get ResponsiblePersons() : Array<IfcPerson>
    {
        if ( this.ResponsiblePersons_ === void 0 )
        {
            
        }

        return this.ResponsiblePersons_ as Array<IfcPerson>;
    }


    public get LastUpdateDate() : IfcCalendarDate
    {
        if ( this.LastUpdateDate_ === void 0 )
        {
            
        }

        return this.LastUpdateDate_ as IfcCalendarDate;
    }


    public get CurrentValue() : IfcCostValue | null
    {
        if ( this.CurrentValue_ === void 0 )
        {
            
        }

        return this.CurrentValue_ as IfcCostValue | null;
    }


    public get OriginalValue() : IfcCostValue | null
    {
        if ( this.OriginalValue_ === void 0 )
        {
            
        }

        return this.OriginalValue_ as IfcCostValue | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
