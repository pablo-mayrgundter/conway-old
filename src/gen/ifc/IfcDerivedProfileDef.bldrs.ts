import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcderivedprofiledef.htm */
export default  class IfcDerivedProfileDef extends IfcProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDERIVEDPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ParentProfile_? : IfcProfileDef;
    private Operator_? : IfcCartesianTransformationOperator2D;
    private Label_? : IfcLabel | null;


    public get ParentProfile() : IfcProfileDef
    {
        if ( this.ParentProfile_ === void 0 )
        {
            
        }

        return this.ParentProfile_ as IfcProfileDef;
    }


    public get Operator() : IfcCartesianTransformationOperator2D
    {
        if ( this.Operator_ === void 0 )
        {
            
        }

        return this.Operator_ as IfcCartesianTransformationOperator2D;
    }


    public get Label() : IfcLabel | null
    {
        if ( this.Label_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Label due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Label' );
                }

                this.Label_ = null;                
            }
            else
            {
                this.Label_ = value;
            }
        }

        return this.Label_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
