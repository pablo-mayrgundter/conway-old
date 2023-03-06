import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcModulusOfSubgradeReactionMeasure from "./IfcModulusOfSubgradeReactionMeasure.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundaryfacecondition.htm */
export default  class IfcBoundaryFaceCondition extends IfcBoundaryCondition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBOUNDARYFACECONDITION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LinearStiffnessByAreaX_? : IfcModulusOfSubgradeReactionMeasure | null;
    private LinearStiffnessByAreaY_? : IfcModulusOfSubgradeReactionMeasure | null;
    private LinearStiffnessByAreaZ_? : IfcModulusOfSubgradeReactionMeasure | null;


    public get LinearStiffnessByAreaX() : IfcModulusOfSubgradeReactionMeasure | null
    {
        if ( this.LinearStiffnessByAreaX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessByAreaX due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessByAreaX' );
                }

                this.LinearStiffnessByAreaX_ = null;                
            }
            else
            {
                this.LinearStiffnessByAreaX_ = value;
            }
        }

        return this.LinearStiffnessByAreaX_ as IfcModulusOfSubgradeReactionMeasure | null;
    }


    public get LinearStiffnessByAreaY() : IfcModulusOfSubgradeReactionMeasure | null
    {
        if ( this.LinearStiffnessByAreaY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessByAreaY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessByAreaY' );
                }

                this.LinearStiffnessByAreaY_ = null;                
            }
            else
            {
                this.LinearStiffnessByAreaY_ = value;
            }
        }

        return this.LinearStiffnessByAreaY_ as IfcModulusOfSubgradeReactionMeasure | null;
    }


    public get LinearStiffnessByAreaZ() : IfcModulusOfSubgradeReactionMeasure | null
    {
        if ( this.LinearStiffnessByAreaZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessByAreaZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessByAreaZ' );
                }

                this.LinearStiffnessByAreaZ_ = null;                
            }
            else
            {
                this.LinearStiffnessByAreaZ_ = value;
            }
        }

        return this.LinearStiffnessByAreaZ_ as IfcModulusOfSubgradeReactionMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
