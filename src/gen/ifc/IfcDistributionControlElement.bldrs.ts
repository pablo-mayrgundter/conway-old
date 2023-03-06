import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcRelFlowControlElements from "./IfcRelFlowControlElements.bldrs"
import IfcDistributionElement from "./IfcDistributionElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdistributioncontrolelement.htm */
export default  class IfcDistributionControlElement extends IfcDistributionElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDISTRIBUTIONCONTROLELEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ControlElementId_? : IfcIdentifier | null;


    public get ControlElementId() : IfcIdentifier | null
    {
        if ( this.ControlElementId_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ControlElementId due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ControlElementId' );
                }

                this.ControlElementId_ = null;                
            }
            else
            {
                this.ControlElementId_ = value;
            }
        }

        return this.ControlElementId_ as IfcIdentifier | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
