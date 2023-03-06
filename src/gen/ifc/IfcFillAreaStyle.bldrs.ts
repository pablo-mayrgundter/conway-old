import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcFillAreaStyleHatching from "./IfcFillAreaStyleHatching.bldrs"
import IfcFillAreaStyleTiles from "./IfcFillAreaStyleTiles.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"
import IfcExternallyDefinedHatchStyle from "./IfcExternallyDefinedHatchStyle.bldrs"
import IfcPresentationStyle from "./IfcPresentationStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyle.htm */
export default  class IfcFillAreaStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFILLAREASTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private FillStyles_? : Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>;


    public get FillStyles() : Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>
    {
        if ( this.FillStyles_ === void 0 )
        {
            
        }

        return this.FillStyles_ as Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
