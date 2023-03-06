import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPlanarExtent from "./IfcPlanarExtent.bldrs"
import IfcBoxAlignment from "./IfcBoxAlignment.bldrs"
import IfcTextLiteral from "./IfcTextLiteral.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextliteralwithextent.htm */
export default  class IfcTextLiteralWithExtent extends IfcTextLiteral 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTLITERALWITHEXTENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Extent_? : IfcPlanarExtent;
    private BoxAlignment_? : IfcBoxAlignment;


    public get Extent() : IfcPlanarExtent
    {
        if ( this.Extent_ === void 0 )
        {
            
        }

        return this.Extent_ as IfcPlanarExtent;
    }


    public get BoxAlignment() : IfcBoxAlignment
    {
        if ( this.BoxAlignment_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BoxAlignment due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field BoxAlignment' );
            };

            this.BoxAlignment_ = value;
        }

        return this.BoxAlignment_ as IfcBoxAlignment;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
