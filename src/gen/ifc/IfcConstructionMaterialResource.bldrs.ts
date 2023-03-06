import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcConstructionResource from "./IfcConstructionResource.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionmaterialresource.htm */
export default  class IfcConstructionMaterialResource extends IfcConstructionResource 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Suppliers_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    private UsageRatio_? : IfcRatioMeasure | null;


    public get Suppliers() : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null
    {
        if ( this.Suppliers_ === void 0 )
        {
            
        }

        return this.Suppliers_ as Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    }


    public get UsageRatio() : IfcRatioMeasure | null
    {
        if ( this.UsageRatio_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UsageRatio due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UsageRatio' );
                }

                this.UsageRatio_ = null;                
            }
            else
            {
                this.UsageRatio_ = value;
            }
        }

        return this.UsageRatio_ as IfcRatioMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
