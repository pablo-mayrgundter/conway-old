import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"
import IfcUnitAssignment from "./IfcUnitAssignment.bldrs"
import IfcObject from "./IfcObject.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcproject.htm */
export default  class IfcProject extends IfcObject 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPROJECT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LongName_? : IfcLabel | null;
    private Phase_? : IfcLabel | null;
    private RepresentationContexts_? : Array<IfcRepresentationContext>;
    private UnitsInContext_? : IfcUnitAssignment;


    public get LongName() : IfcLabel | null
    {
        if ( this.LongName_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LongName due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LongName' );
                }

                this.LongName_ = null;                
            }
            else
            {
                this.LongName_ = value;
            }
        }

        return this.LongName_ as IfcLabel | null;
    }


    public get Phase() : IfcLabel | null
    {
        if ( this.Phase_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Phase due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Phase' );
                }

                this.Phase_ = null;                
            }
            else
            {
                this.Phase_ = value;
            }
        }

        return this.Phase_ as IfcLabel | null;
    }


    public get RepresentationContexts() : Array<IfcRepresentationContext>
    {
        if ( this.RepresentationContexts_ === void 0 )
        {
            
        }

        return this.RepresentationContexts_ as Array<IfcRepresentationContext>;
    }


    public get UnitsInContext() : IfcUnitAssignment
    {
        if ( this.UnitsInContext_ === void 0 )
        {
            
        }

        return this.UnitsInContext_ as IfcUnitAssignment;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
