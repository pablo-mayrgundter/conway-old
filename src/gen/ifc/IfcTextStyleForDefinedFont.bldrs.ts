import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstylefordefinedfont.htm */
export default  class IfcTextStyleForDefinedFont extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTSTYLEFORDEFINEDFONT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Colour_? : IfcColourSpecification|IfcPreDefinedColour;
    private BackgroundColour_? : IfcColourSpecification|IfcPreDefinedColour | null;


    public get Colour() : IfcColourSpecification|IfcPreDefinedColour
    {
        if ( this.Colour_ === void 0 )
        {
            
        }

        return this.Colour_ as IfcColourSpecification|IfcPreDefinedColour;
    }


    public get BackgroundColour() : IfcColourSpecification|IfcPreDefinedColour | null
    {
        if ( this.BackgroundColour_ === void 0 )
        {
            
        }

        return this.BackgroundColour_ as IfcColourSpecification|IfcPreDefinedColour | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
