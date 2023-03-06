import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcTypeObject from "./IfcTypeObject.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctypeproduct.htm */
export default  class IfcTypeProduct extends IfcTypeObject 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTYPEPRODUCT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RepresentationMaps_? : Array<IfcRepresentationMap> | null;
    private Tag_? : IfcLabel | null;


    public get RepresentationMaps() : Array<IfcRepresentationMap> | null
    {
        if ( this.RepresentationMaps_ === void 0 )
        {
            
        }

        return this.RepresentationMaps_ as Array<IfcRepresentationMap> | null;
    }


    public get Tag() : IfcLabel | null
    {
        if ( this.Tag_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Tag due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Tag' );
                }

                this.Tag_ = null;                
            }
            else
            {
                this.Tag_ = value;
            }
        }

        return this.Tag_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
