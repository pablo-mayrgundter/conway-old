import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcFeatureElementSubtraction from "./IfcFeatureElementSubtraction.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcedgefeature.htm */
export default abstract class IfcEdgeFeature extends IfcFeatureElementSubtraction 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCEDGEFEATURE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private FeatureLength_? : IfcPositiveLengthMeasure | null;


    public get FeatureLength() : IfcPositiveLengthMeasure | null
    {
        if ( this.FeatureLength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FeatureLength due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FeatureLength' );
                }

                this.FeatureLength_ = null;                
            }
            else
            {
                this.FeatureLength_ = value;
            }
        }

        return this.FeatureLength_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
