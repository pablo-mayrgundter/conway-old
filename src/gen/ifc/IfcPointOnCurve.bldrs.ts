import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcPoint from "./IfcPoint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpointoncurve.htm */
export default  class IfcPointOnCurve extends IfcPoint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPOINTONCURVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BasisCurve_? : IfcCurve;
    private PointParameter_? : IfcParameterValue;


    public get BasisCurve() : IfcCurve
    {
        if ( this.BasisCurve_ === void 0 )
        {
            
        }

        return this.BasisCurve_ as IfcCurve;
    }


    public get PointParameter() : IfcParameterValue
    {
        if ( this.PointParameter_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PointParameter due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PointParameter' );
            };

            this.PointParameter_ = value;
        }

        return this.PointParameter_ as IfcParameterValue;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
