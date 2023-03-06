import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTextStyleForDefinedFont from "./IfcTextStyleForDefinedFont.bldrs"
import IfcTextStyleWithBoxCharacteristics from "./IfcTextStyleWithBoxCharacteristics.bldrs"
import IfcTextStyleTextModel from "./IfcTextStyleTextModel.bldrs"
import IfcPreDefinedTextFont from "./IfcPreDefinedTextFont.bldrs"
import IfcExternallyDefinedTextFont from "./IfcExternallyDefinedTextFont.bldrs"
import IfcPresentationStyle from "./IfcPresentationStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstyle.htm */
export default  class IfcTextStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTSTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TextCharacterAppearance_? : IfcTextStyleForDefinedFont | null;
    private TextStyle_? : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null;
    private TextFontStyle_? : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont;


    public get TextCharacterAppearance() : IfcTextStyleForDefinedFont | null
    {
        if ( this.TextCharacterAppearance_ === void 0 )
        {
            
        }

        return this.TextCharacterAppearance_ as IfcTextStyleForDefinedFont | null;
    }


    public get TextStyle() : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null
    {
        if ( this.TextStyle_ === void 0 )
        {
            
        }

        return this.TextStyle_ as IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null;
    }


    public get TextFontStyle() : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont
    {
        if ( this.TextFontStyle_ === void 0 )
        {
            
        }

        return this.TextFontStyle_ as IfcPreDefinedTextFont|IfcExternallyDefinedTextFont;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
