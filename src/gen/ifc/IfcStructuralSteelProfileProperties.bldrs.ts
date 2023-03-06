import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcStructuralProfileProperties from "./IfcStructuralProfileProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralsteelprofileproperties.htm */
export default  class IfcStructuralSteelProfileProperties extends IfcStructuralProfileProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALSTEELPROFILEPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ShearAreaZ_? : IfcAreaMeasure | null;
    private ShearAreaY_? : IfcAreaMeasure | null;
    private PlasticShapeFactorY_? : IfcPositiveRatioMeasure | null;
    private PlasticShapeFactorZ_? : IfcPositiveRatioMeasure | null;


    public get ShearAreaZ() : IfcAreaMeasure | null
    {
        if ( this.ShearAreaZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 23 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearAreaZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 23;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearAreaZ' );
                }

                this.ShearAreaZ_ = null;                
            }
            else
            {
                this.ShearAreaZ_ = value;
            }
        }

        return this.ShearAreaZ_ as IfcAreaMeasure | null;
    }


    public get ShearAreaY() : IfcAreaMeasure | null
    {
        if ( this.ShearAreaY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 24 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearAreaY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 24;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearAreaY' );
                }

                this.ShearAreaY_ = null;                
            }
            else
            {
                this.ShearAreaY_ = value;
            }
        }

        return this.ShearAreaY_ as IfcAreaMeasure | null;
    }


    public get PlasticShapeFactorY() : IfcPositiveRatioMeasure | null
    {
        if ( this.PlasticShapeFactorY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 25 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PlasticShapeFactorY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 25;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PlasticShapeFactorY' );
                }

                this.PlasticShapeFactorY_ = null;                
            }
            else
            {
                this.PlasticShapeFactorY_ = value;
            }
        }

        return this.PlasticShapeFactorY_ as IfcPositiveRatioMeasure | null;
    }


    public get PlasticShapeFactorZ() : IfcPositiveRatioMeasure | null
    {
        if ( this.PlasticShapeFactorZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 26 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PlasticShapeFactorZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 26;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PlasticShapeFactorZ' );
                }

                this.PlasticShapeFactorZ_ = null;                
            }
            else
            {
                this.PlasticShapeFactorZ_ = value;
            }
        }

        return this.PlasticShapeFactorZ_ as IfcPositiveRatioMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
