import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcFillAreaStyleTileSymbolWithStyle from "./IfcFillAreaStyleTileSymbolWithStyle.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyletiles.htm */
export default  class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFILLAREASTYLETILES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TilingPattern_? : IfcOneDirectionRepeatFactor;
    private Tiles_? : Array<IfcFillAreaStyleTileSymbolWithStyle>;
    private TilingScale_? : IfcPositiveRatioMeasure;


    public get TilingPattern() : IfcOneDirectionRepeatFactor
    {
        if ( this.TilingPattern_ === void 0 )
        {
            
        }

        return this.TilingPattern_ as IfcOneDirectionRepeatFactor;
    }


    public get Tiles() : Array<IfcFillAreaStyleTileSymbolWithStyle>
    {
        if ( this.Tiles_ === void 0 )
        {
            
        }

        return this.Tiles_ as Array<IfcFillAreaStyleTileSymbolWithStyle>;
    }


    public get TilingScale() : IfcPositiveRatioMeasure
    {
        if ( this.TilingScale_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TilingScale due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TilingScale' );
            };

            this.TilingScale_ = value;
        }

        return this.TilingScale_ as IfcPositiveRatioMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
