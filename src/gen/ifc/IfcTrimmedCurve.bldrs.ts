import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcTrimmingPreference, { IfcTrimmingPreferenceDeserializeStep } from "./IfcTrimmingPreference.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctrimmedcurve.htm */
export default  class IfcTrimmedCurve extends IfcBoundedCurve 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTRIMMEDCURVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BasisCurve_? : IfcCurve;
    private Trim1_? : Array<IfcCartesianPoint|IfcParameterValue>;
    private Trim2_? : Array<IfcCartesianPoint|IfcParameterValue>;
    private SenseAgreement_? : boolean;
    private MasterRepresentation_? : IfcTrimmingPreference;


    public get BasisCurve() : IfcCurve
    {
        if ( this.BasisCurve_ === void 0 )
        {
            
        }

        return this.BasisCurve_ as IfcCurve;
    }


    public get Trim1() : Array<IfcCartesianPoint|IfcParameterValue>
    {
        if ( this.Trim1_ === void 0 )
        {
            
        }

        return this.Trim1_ as Array<IfcCartesianPoint|IfcParameterValue>;
    }


    public get Trim2() : Array<IfcCartesianPoint|IfcParameterValue>
    {
        if ( this.Trim2_ === void 0 )
        {
            
        }

        return this.Trim2_ as Array<IfcCartesianPoint|IfcParameterValue>;
    }


    public get SenseAgreement() : boolean
    {
        if ( this.SenseAgreement_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SenseAgreement due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SenseAgreement' );
            };

            this.SenseAgreement_ = value;
        }

        return this.SenseAgreement_ as boolean;
    }


    public get MasterRepresentation() : IfcTrimmingPreference
    {
        if ( this.MasterRepresentation_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MasterRepresentation due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcTrimmingPreferenceDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field MasterRepresentation' );
            };

            this.MasterRepresentation_ = value;
        }

        return this.MasterRepresentation_ as IfcTrimmingPreference;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
