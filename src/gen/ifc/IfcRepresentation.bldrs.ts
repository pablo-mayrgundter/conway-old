import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrepresentation.htm */
export default  class IfcRepresentation extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREPRESENTATION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ContextOfItems_? : IfcRepresentationContext;
    private RepresentationIdentifier_? : IfcLabel | null;
    private RepresentationType_? : IfcLabel | null;
    private Items_? : Array<IfcRepresentationItem>;


    public get ContextOfItems() : IfcRepresentationContext
    {
        if ( this.ContextOfItems_ === void 0 )
        {
            
        }

        return this.ContextOfItems_ as IfcRepresentationContext;
    }


    public get RepresentationIdentifier() : IfcLabel | null
    {
        if ( this.RepresentationIdentifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RepresentationIdentifier due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RepresentationIdentifier' );
                }

                this.RepresentationIdentifier_ = null;                
            }
            else
            {
                this.RepresentationIdentifier_ = value;
            }
        }

        return this.RepresentationIdentifier_ as IfcLabel | null;
    }


    public get RepresentationType() : IfcLabel | null
    {
        if ( this.RepresentationType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RepresentationType due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RepresentationType' );
                }

                this.RepresentationType_ = null;                
            }
            else
            {
                this.RepresentationType_ = value;
            }
        }

        return this.RepresentationType_ as IfcLabel | null;
    }


    public get Items() : Array<IfcRepresentationItem>
    {
        if ( this.Items_ === void 0 )
        {
            
        }

        return this.Items_ as Array<IfcRepresentationItem>;
    }








    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
