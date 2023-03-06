import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcSweptAreaSolid from "./IfcSweptAreaSolid.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacecurvesweptareasolid.htm */
export default  class IfcSurfaceCurveSweptAreaSolid extends IfcSweptAreaSolid 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACECURVESWEPTAREASOLID;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Directrix_? : IfcCurve;
    private StartParam_? : IfcParameterValue;
    private EndParam_? : IfcParameterValue;
    private ReferenceSurface_? : IfcSurface;


    public get Directrix() : IfcCurve
    {
        if ( this.Directrix_ === void 0 )
        {
            
        }

        return this.Directrix_ as IfcCurve;
    }


    public get StartParam() : IfcParameterValue
    {
        if ( this.StartParam_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field StartParam due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field StartParam' );
            };

            this.StartParam_ = value;
        }

        return this.StartParam_ as IfcParameterValue;
    }


    public get EndParam() : IfcParameterValue
    {
        if ( this.EndParam_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field EndParam due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field EndParam' );
            };

            this.EndParam_ = value;
        }

        return this.EndParam_ as IfcParameterValue;
    }


    public get ReferenceSurface() : IfcSurface
    {
        if ( this.ReferenceSurface_ === void 0 )
        {
            
        }

        return this.ReferenceSurface_ as IfcSurface;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
