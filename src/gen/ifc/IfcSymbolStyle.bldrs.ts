import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"
import IfcPresentationStyle from "./IfcPresentationStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsymbolstyle.htm */
export default  class IfcSymbolStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSYMBOLSTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private StyleOfSymbol_? : IfcColourSpecification|IfcPreDefinedColour;


    public get StyleOfSymbol() : IfcColourSpecification|IfcPreDefinedColour
    {
        if ( this.StyleOfSymbol_ === void 0 )
        {
            
        }

        return this.StyleOfSymbol_ as IfcColourSpecification|IfcPreDefinedColour;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
