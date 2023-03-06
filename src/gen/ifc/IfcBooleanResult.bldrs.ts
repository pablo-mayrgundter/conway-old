import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBooleanOperator, { IfcBooleanOperatorDeserializeStep } from "./IfcBooleanOperator.bldrs"
import IfcSolidModel from "./IfcSolidModel.bldrs"
import IfcHalfSpaceSolid from "./IfcHalfSpaceSolid.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbooleanresult.htm */
export default  class IfcBooleanResult extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBOOLEANRESULT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Operator_? : IfcBooleanOperator;
    private FirstOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    private SecondOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;


    public get Operator() : IfcBooleanOperator
    {
        if ( this.Operator_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Operator due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcBooleanOperatorDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Operator' );
            };

            this.Operator_ = value;
        }

        return this.Operator_ as IfcBooleanOperator;
    }


    public get FirstOperand() : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D
    {
        if ( this.FirstOperand_ === void 0 )
        {
            
        }

        return this.FirstOperand_ as IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    }


    public get SecondOperand() : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D
    {
        if ( this.SecondOperand_ === void 0 )
        {
            
        }

        return this.SecondOperand_ as IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
