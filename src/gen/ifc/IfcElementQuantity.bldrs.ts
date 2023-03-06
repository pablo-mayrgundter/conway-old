import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelementquantity.htm */
export default  class IfcElementQuantity extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCELEMENTQUANTITY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MethodOfMeasurement_? : IfcLabel | null;
    private Quantities_? : Array<IfcPhysicalQuantity>;


    public get MethodOfMeasurement() : IfcLabel | null
    {
        if ( this.MethodOfMeasurement_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MethodOfMeasurement due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MethodOfMeasurement' );
                }

                this.MethodOfMeasurement_ = null;                
            }
            else
            {
                this.MethodOfMeasurement_ = value;
            }
        }

        return this.MethodOfMeasurement_ as IfcLabel | null;
    }


    public get Quantities() : Array<IfcPhysicalQuantity>
    {
        if ( this.Quantities_ === void 0 )
        {
            
        }

        return this.Quantities_ as Array<IfcPhysicalQuantity>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
