import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcphysicalcomplexquantity.htm */
export default  class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private HasQuantities_? : Array<IfcPhysicalQuantity>;
    private Discrimination_? : IfcLabel;
    private Quality_? : IfcLabel | null;
    private Usage_? : IfcLabel | null;


    public get HasQuantities() : Array<IfcPhysicalQuantity>
    {
        if ( this.HasQuantities_ === void 0 )
        {
            
        }

        return this.HasQuantities_ as Array<IfcPhysicalQuantity>;
    }


    public get Discrimination() : IfcLabel
    {
        if ( this.Discrimination_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Discrimination due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Discrimination' );
            };

            this.Discrimination_ = value;
        }

        return this.Discrimination_ as IfcLabel;
    }


    public get Quality() : IfcLabel | null
    {
        if ( this.Quality_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Quality due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Quality' );
                }

                this.Quality_ = null;                
            }
            else
            {
                this.Quality_ = value;
            }
        }

        return this.Quality_ as IfcLabel | null;
    }


    public get Usage() : IfcLabel | null
    {
        if ( this.Usage_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Usage due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Usage' );
                }

                this.Usage_ = null;                
            }
            else
            {
                this.Usage_ = value;
            }
        }

        return this.Usage_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
