import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDerivedUnitElement from "./IfcDerivedUnitElement.bldrs"
import IfcDerivedUnitEnum, { IfcDerivedUnitEnumDeserializeStep } from "./IfcDerivedUnitEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcDimensionalExponents from "./IfcDimensionalExponents.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcderivedunit.htm */
export default  class IfcDerivedUnit extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDERIVEDUNIT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Elements_? : Array<IfcDerivedUnitElement>;
    private UnitType_? : IfcDerivedUnitEnum;
    private UserDefinedType_? : IfcLabel | null;


    public get Elements() : Array<IfcDerivedUnitElement>
    {
        if ( this.Elements_ === void 0 )
        {
            
        }

        return this.Elements_ as Array<IfcDerivedUnitElement>;
    }


    public get UnitType() : IfcDerivedUnitEnum
    {
        if ( this.UnitType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UnitType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDerivedUnitEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field UnitType' );
            };

            this.UnitType_ = value;
        }

        return this.UnitType_ as IfcDerivedUnitEnum;
    }


    public get UserDefinedType() : IfcLabel | null
    {
        if ( this.UserDefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedType' );
                }

                this.UserDefinedType_ = null;                
            }
            else
            {
                this.UserDefinedType_ = value;
            }
        }

        return this.UserDefinedType_ as IfcLabel | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
