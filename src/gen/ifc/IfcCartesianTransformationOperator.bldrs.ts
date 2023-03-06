import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDirection from "./IfcDirection.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesiantransformationoperator.htm */
export default abstract class IfcCartesianTransformationOperator extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCARTESIANTRANSFORMATIONOPERATOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Axis1_? : IfcDirection | null;
    private Axis2_? : IfcDirection | null;
    private LocalOrigin_? : IfcCartesianPoint;
    private Scale_? : number | null;


    public get Axis1() : IfcDirection | null
    {
        if ( this.Axis1_ === void 0 )
        {
            
        }

        return this.Axis1_ as IfcDirection | null;
    }


    public get Axis2() : IfcDirection | null
    {
        if ( this.Axis2_ === void 0 )
        {
            
        }

        return this.Axis2_ as IfcDirection | null;
    }


    public get LocalOrigin() : IfcCartesianPoint
    {
        if ( this.LocalOrigin_ === void 0 )
        {
            
        }

        return this.LocalOrigin_ as IfcCartesianPoint;
    }


    public get Scale() : number | null
    {
        if ( this.Scale_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Scale due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Scale' );
                }

                this.Scale_ = null;                
            }
            else
            {
                this.Scale_ = value;
            }
        }

        return this.Scale_ as number | null;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
