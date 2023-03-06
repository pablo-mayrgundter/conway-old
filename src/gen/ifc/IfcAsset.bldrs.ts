import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcasset.htm */
export default  class IfcAsset extends IfcGroup 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCASSET;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private AssetID_? : IfcIdentifier;
    private OriginalValue_? : IfcCostValue;
    private CurrentValue_? : IfcCostValue;
    private TotalReplacementCost_? : IfcCostValue;
    private Owner_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    private User_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    private ResponsiblePerson_? : IfcPerson;
    private IncorporationDate_? : IfcCalendarDate;
    private DepreciatedValue_? : IfcCostValue;


    public get AssetID() : IfcIdentifier
    {
        if ( this.AssetID_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AssetID due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field AssetID' );
            };

            this.AssetID_ = value;
        }

        return this.AssetID_ as IfcIdentifier;
    }


    public get OriginalValue() : IfcCostValue
    {
        if ( this.OriginalValue_ === void 0 )
        {
            
        }

        return this.OriginalValue_ as IfcCostValue;
    }


    public get CurrentValue() : IfcCostValue
    {
        if ( this.CurrentValue_ === void 0 )
        {
            
        }

        return this.CurrentValue_ as IfcCostValue;
    }


    public get TotalReplacementCost() : IfcCostValue
    {
        if ( this.TotalReplacementCost_ === void 0 )
        {
            
        }

        return this.TotalReplacementCost_ as IfcCostValue;
    }


    public get Owner() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.Owner_ === void 0 )
        {
            
        }

        return this.Owner_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }


    public get User() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.User_ === void 0 )
        {
            
        }

        return this.User_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }


    public get ResponsiblePerson() : IfcPerson
    {
        if ( this.ResponsiblePerson_ === void 0 )
        {
            
        }

        return this.ResponsiblePerson_ as IfcPerson;
    }


    public get IncorporationDate() : IfcCalendarDate
    {
        if ( this.IncorporationDate_ === void 0 )
        {
            
        }

        return this.IncorporationDate_ as IfcCalendarDate;
    }


    public get DepreciatedValue() : IfcCostValue
    {
        if ( this.DepreciatedValue_ === void 0 )
        {
            
        }

        return this.DepreciatedValue_ as IfcCostValue;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
