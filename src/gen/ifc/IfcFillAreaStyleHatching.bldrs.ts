import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastylehatching.htm */
export default  class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFILLAREASTYLEHATCHING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private HatchLineAppearance_? : IfcCurveStyle;
    private StartOfNextHatchLine_? : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure;
    private PointOfReferenceHatchLine_? : IfcCartesianPoint | null;
    private PatternStart_? : IfcCartesianPoint | null;
    private HatchLineAngle_? : IfcPlaneAngleMeasure;


    public get HatchLineAppearance() : IfcCurveStyle
    {
        if ( this.HatchLineAppearance_ === void 0 )
        {
            
        }

        return this.HatchLineAppearance_ as IfcCurveStyle;
    }


    public get StartOfNextHatchLine() : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure
    {
        if ( this.StartOfNextHatchLine_ === void 0 )
        {
            
        }

        return this.StartOfNextHatchLine_ as IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure;
    }


    public get PointOfReferenceHatchLine() : IfcCartesianPoint | null
    {
        if ( this.PointOfReferenceHatchLine_ === void 0 )
        {
            
        }

        return this.PointOfReferenceHatchLine_ as IfcCartesianPoint | null;
    }


    public get PatternStart() : IfcCartesianPoint | null
    {
        if ( this.PatternStart_ === void 0 )
        {
            
        }

        return this.PatternStart_ as IfcCartesianPoint | null;
    }


    public get HatchLineAngle() : IfcPlaneAngleMeasure
    {
        if ( this.HatchLineAngle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field HatchLineAngle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field HatchLineAngle' );
            };

            this.HatchLineAngle_ = value;
        }

        return this.HatchLineAngle_ as IfcPlaneAngleMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
