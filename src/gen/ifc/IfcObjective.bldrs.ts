import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMetric from "./IfcMetric.bldrs"
import IfcObjectiveEnum, { IfcObjectiveEnumDeserializeStep } from "./IfcObjectiveEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcobjective.htm */
export default  class IfcObjective extends IfcConstraint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCOBJECTIVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BenchmarkValues_? : IfcMetric | null;
    private ResultValues_? : IfcMetric | null;
    private ObjectiveQualifier_? : IfcObjectiveEnum;
    private UserDefinedQualifier_? : IfcLabel | null;


    public get BenchmarkValues() : IfcMetric | null
    {
        if ( this.BenchmarkValues_ === void 0 )
        {
            
        }

        return this.BenchmarkValues_ as IfcMetric | null;
    }


    public get ResultValues() : IfcMetric | null
    {
        if ( this.ResultValues_ === void 0 )
        {
            
        }

        return this.ResultValues_ as IfcMetric | null;
    }


    public get ObjectiveQualifier() : IfcObjectiveEnum
    {
        if ( this.ObjectiveQualifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ObjectiveQualifier due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcObjectiveEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ObjectiveQualifier' );
            };

            this.ObjectiveQualifier_ = value;
        }

        return this.ObjectiveQualifier_ as IfcObjectiveEnum;
    }


    public get UserDefinedQualifier() : IfcLabel | null
    {
        if ( this.UserDefinedQualifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedQualifier due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedQualifier' );
                }

                this.UserDefinedQualifier_ = null;                
            }
            else
            {
                this.UserDefinedQualifier_ = value;
            }
        }

        return this.UserDefinedQualifier_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
