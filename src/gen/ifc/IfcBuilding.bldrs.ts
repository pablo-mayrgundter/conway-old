import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPostalAddress from "./IfcPostalAddress.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbuilding.htm */
export default  class IfcBuilding extends IfcSpatialStructureElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBUILDING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ElevationOfRefHeight_? : IfcLengthMeasure | null;
    private ElevationOfTerrain_? : IfcLengthMeasure | null;
    private BuildingAddress_? : IfcPostalAddress | null;


    public get ElevationOfRefHeight() : IfcLengthMeasure | null
    {
        if ( this.ElevationOfRefHeight_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ElevationOfRefHeight due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ElevationOfRefHeight' );
                }

                this.ElevationOfRefHeight_ = null;                
            }
            else
            {
                this.ElevationOfRefHeight_ = value;
            }
        }

        return this.ElevationOfRefHeight_ as IfcLengthMeasure | null;
    }


    public get ElevationOfTerrain() : IfcLengthMeasure | null
    {
        if ( this.ElevationOfTerrain_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ElevationOfTerrain due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ElevationOfTerrain' );
                }

                this.ElevationOfTerrain_ = null;                
            }
            else
            {
                this.ElevationOfTerrain_ = value;
            }
        }

        return this.ElevationOfTerrain_ as IfcLengthMeasure | null;
    }


    public get BuildingAddress() : IfcPostalAddress | null
    {
        if ( this.BuildingAddress_ === void 0 )
        {
            
        }

        return this.BuildingAddress_ as IfcPostalAddress | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
