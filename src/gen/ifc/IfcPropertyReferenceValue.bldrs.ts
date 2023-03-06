import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcMaterialList from "./IfcMaterialList.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcSimpleProperty from "./IfcSimpleProperty.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertyreferencevalue.htm */
export default  class IfcPropertyReferenceValue extends IfcSimpleProperty 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPROPERTYREFERENCEVALUE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private UsageName_? : IfcLabel | null;
    private PropertyReference_? : IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue;


    public get UsageName() : IfcLabel | null
    {
        if ( this.UsageName_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UsageName due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UsageName' );
                }

                this.UsageName_ = null;                
            }
            else
            {
                this.UsageName_ = value;
            }
        }

        return this.UsageName_ as IfcLabel | null;
    }


    public get PropertyReference() : IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue
    {
        if ( this.PropertyReference_ === void 0 )
        {
            
        }

        return this.PropertyReference_ as IfcMaterial|IfcPerson|IfcDateAndTime|IfcMaterialList|IfcOrganization|IfcCalendarDate|IfcLocalTime|IfcPersonAndOrganization|IfcMaterialLayer|IfcExternalReference|IfcTimeSeries|IfcAddress|IfcAppliedValue;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
