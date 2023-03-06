import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcLogicalOperatorEnum, { IfcLogicalOperatorEnumDeserializeStep } from "./IfcLogicalOperatorEnum.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstraintaggregationrelationship.htm */
export default  class IfcConstraintAggregationRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONSTRAINTAGGREGATIONRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Name_? : IfcLabel | null;
    private Description_? : IfcText | null;
    private RelatingConstraint_? : IfcConstraint;
    private RelatedConstraints_? : Array<IfcConstraint>;
    private LogicalAggregator_? : IfcLogicalOperatorEnum;


    public get Name() : IfcLabel | null
    {
        if ( this.Name_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Name due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Name' );
                }

                this.Name_ = null;                
            }
            else
            {
                this.Name_ = value;
            }
        }

        return this.Name_ as IfcLabel | null;
    }


    public get Description() : IfcText | null
    {
        if ( this.Description_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Description due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Description' );
                }

                this.Description_ = null;                
            }
            else
            {
                this.Description_ = value;
            }
        }

        return this.Description_ as IfcText | null;
    }


    public get RelatingConstraint() : IfcConstraint
    {
        if ( this.RelatingConstraint_ === void 0 )
        {
            
        }

        return this.RelatingConstraint_ as IfcConstraint;
    }


    public get RelatedConstraints() : Array<IfcConstraint>
    {
        if ( this.RelatedConstraints_ === void 0 )
        {
            
        }

        return this.RelatedConstraints_ as Array<IfcConstraint>;
    }


    public get LogicalAggregator() : IfcLogicalOperatorEnum
    {
        if ( this.LogicalAggregator_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LogicalAggregator due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcLogicalOperatorEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LogicalAggregator' );
            };

            this.LogicalAggregator_ = value;
        }

        return this.LogicalAggregator_ as IfcLogicalOperatorEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
