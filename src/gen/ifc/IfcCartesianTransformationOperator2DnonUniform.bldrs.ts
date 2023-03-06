import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesiantransformationoperator2dnonuniform.htm */
export default  class IfcCartesianTransformationOperator2DnonUniform extends IfcCartesianTransformationOperator2D 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Scale2_? : number | null;


    public get Scale2() : number | null
    {
        if ( this.Scale2_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Scale2 due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Scale2' );
                }

                this.Scale2_ = null;                
            }
            else
            {
                this.Scale2_ = value;
            }
        }

        return this.Scale2_ as number | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
