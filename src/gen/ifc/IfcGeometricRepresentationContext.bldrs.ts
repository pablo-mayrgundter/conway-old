import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcGeometricRepresentationSubContext from "./IfcGeometricRepresentationSubContext.bldrs"
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricrepresentationcontext.htm */
export default  class IfcGeometricRepresentationContext extends IfcRepresentationContext 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGEOMETRICREPRESENTATIONCONTEXT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private CoordinateSpaceDimension_? : IfcDimensionCount;
    private Precision_? : number | null;
    private WorldCoordinateSystem_? : IfcAxis2Placement2D|IfcAxis2Placement3D;
    private TrueNorth_? : IfcDirection | null;


    public get CoordinateSpaceDimension() : IfcDimensionCount
    {
        if ( this.CoordinateSpaceDimension_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CoordinateSpaceDimension due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field CoordinateSpaceDimension' );
            };

            this.CoordinateSpaceDimension_ = value;
        }

        return this.CoordinateSpaceDimension_ as IfcDimensionCount;
    }


    public get Precision() : number | null
    {
        if ( this.Precision_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Precision due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Precision' );
                }

                this.Precision_ = null;                
            }
            else
            {
                this.Precision_ = value;
            }
        }

        return this.Precision_ as number | null;
    }


    public get WorldCoordinateSystem() : IfcAxis2Placement2D|IfcAxis2Placement3D
    {
        if ( this.WorldCoordinateSystem_ === void 0 )
        {
            
        }

        return this.WorldCoordinateSystem_ as IfcAxis2Placement2D|IfcAxis2Placement3D;
    }


    public get TrueNorth() : IfcDirection | null
    {
        if ( this.TrueNorth_ === void 0 )
        {
            
        }

        return this.TrueNorth_ as IfcDirection | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
