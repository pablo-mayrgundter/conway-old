import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSurface from "./IfcSurface.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcPoint from "./IfcPoint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpointonsurface.htm */
export default  class IfcPointOnSurface extends IfcPoint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPOINTONSURFACE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private BasisSurface_? : IfcSurface;
    private PointParameterU_? : IfcParameterValue;
    private PointParameterV_? : IfcParameterValue;


    public get BasisSurface() : IfcSurface
    {
        if ( this.BasisSurface_ === void 0 )
        {
            
        }

        return this.BasisSurface_ as IfcSurface;
    }


    public get PointParameterU() : IfcParameterValue
    {
        if ( this.PointParameterU_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PointParameterU due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PointParameterU' );
            };

            this.PointParameterU_ = value;
        }

        return this.PointParameterU_ as IfcParameterValue;
    }


    public get PointParameterV() : IfcParameterValue
    {
        if ( this.PointParameterV_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PointParameterV due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PointParameterV' );
            };

            this.PointParameterV_ = value;
        }

        return this.PointParameterV_ as IfcParameterValue;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
