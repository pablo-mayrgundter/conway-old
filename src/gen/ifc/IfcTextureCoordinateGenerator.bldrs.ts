import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcInteger from "./IfcInteger.bldrs"
import IfcReal from "./IfcReal.bldrs"
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLogical from "./IfcLogical.bldrs"
import IfcTextureCoordinate from "./IfcTextureCoordinate.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturecoordinategenerator.htm */
export default  class IfcTextureCoordinateGenerator extends IfcTextureCoordinate 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Mode_? : IfcLabel;
    private Parameter_? : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>;


    public get Mode() : IfcLabel
    {
        if ( this.Mode_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Mode due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Mode' );
            };

            this.Mode_ = value;
        }

        return this.Mode_ as IfcLabel;
    }


    public get Parameter() : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>
    {
        if ( this.Parameter_ === void 0 )
        {
            
        }

        return this.Parameter_ as Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
