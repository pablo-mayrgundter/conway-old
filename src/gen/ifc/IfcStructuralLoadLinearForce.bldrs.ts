import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLinearForceMeasure from "./IfcLinearForceMeasure.bldrs"
import IfcLinearMomentMeasure from "./IfcLinearMomentMeasure.bldrs"
import IfcStructuralLoadStatic from "./IfcStructuralLoadStatic.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadlinearforce.htm */
export default  class IfcStructuralLoadLinearForce extends IfcStructuralLoadStatic 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALLOADLINEARFORCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LinearForceX_? : IfcLinearForceMeasure | null;
    private LinearForceY_? : IfcLinearForceMeasure | null;
    private LinearForceZ_? : IfcLinearForceMeasure | null;
    private LinearMomentX_? : IfcLinearMomentMeasure | null;
    private LinearMomentY_? : IfcLinearMomentMeasure | null;
    private LinearMomentZ_? : IfcLinearMomentMeasure | null;


    public get LinearForceX() : IfcLinearForceMeasure | null
    {
        if ( this.LinearForceX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearForceX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearForceX' );
                }

                this.LinearForceX_ = null;                
            }
            else
            {
                this.LinearForceX_ = value;
            }
        }

        return this.LinearForceX_ as IfcLinearForceMeasure | null;
    }


    public get LinearForceY() : IfcLinearForceMeasure | null
    {
        if ( this.LinearForceY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearForceY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearForceY' );
                }

                this.LinearForceY_ = null;                
            }
            else
            {
                this.LinearForceY_ = value;
            }
        }

        return this.LinearForceY_ as IfcLinearForceMeasure | null;
    }


    public get LinearForceZ() : IfcLinearForceMeasure | null
    {
        if ( this.LinearForceZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearForceZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearForceZ' );
                }

                this.LinearForceZ_ = null;                
            }
            else
            {
                this.LinearForceZ_ = value;
            }
        }

        return this.LinearForceZ_ as IfcLinearForceMeasure | null;
    }


    public get LinearMomentX() : IfcLinearMomentMeasure | null
    {
        if ( this.LinearMomentX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearMomentX due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearMomentX' );
                }

                this.LinearMomentX_ = null;                
            }
            else
            {
                this.LinearMomentX_ = value;
            }
        }

        return this.LinearMomentX_ as IfcLinearMomentMeasure | null;
    }


    public get LinearMomentY() : IfcLinearMomentMeasure | null
    {
        if ( this.LinearMomentY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearMomentY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearMomentY' );
                }

                this.LinearMomentY_ = null;                
            }
            else
            {
                this.LinearMomentY_ = value;
            }
        }

        return this.LinearMomentY_ as IfcLinearMomentMeasure | null;
    }


    public get LinearMomentZ() : IfcLinearMomentMeasure | null
    {
        if ( this.LinearMomentZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearMomentZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearMomentZ' );
                }

                this.LinearMomentZ_ = null;                
            }
            else
            {
                this.LinearMomentZ_ = value;
            }
        }

        return this.LinearMomentZ_ as IfcLinearMomentMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
