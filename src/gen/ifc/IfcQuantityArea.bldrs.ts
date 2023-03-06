import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcPhysicalSimpleQuantity from "./IfcPhysicalSimpleQuantity.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcquantityarea.htm */
export default  class IfcQuantityArea extends IfcPhysicalSimpleQuantity 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCQUANTITYAREA;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private AreaValue_? : IfcAreaMeasure;


    public get AreaValue() : IfcAreaMeasure
    {
        if ( this.AreaValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field AreaValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field AreaValue' );
            };

            this.AreaValue_ = value;
        }

        return this.AreaValue_ as IfcAreaMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
