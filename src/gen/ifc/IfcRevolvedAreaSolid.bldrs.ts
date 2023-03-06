import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis1Placement from "./IfcAxis1Placement.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcLine from "./IfcLine.bldrs"
import IfcSweptAreaSolid from "./IfcSweptAreaSolid.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrevolvedareasolid.htm */
export default  class IfcRevolvedAreaSolid extends IfcSweptAreaSolid 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREVOLVEDAREASOLID;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Axis_? : IfcAxis1Placement;
    private Angle_? : IfcPlaneAngleMeasure;


    public get Axis() : IfcAxis1Placement
    {
        if ( this.Axis_ === void 0 )
        {
            
        }

        return this.Axis_ as IfcAxis1Placement;
    }


    public get Angle() : IfcPlaneAngleMeasure
    {
        if ( this.Angle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Angle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Angle' );
            };

            this.Angle_ = value;
        }

        return this.Angle_ as IfcPlaneAngleMeasure;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
