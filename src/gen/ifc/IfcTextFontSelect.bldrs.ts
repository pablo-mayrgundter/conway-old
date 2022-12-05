
import IfcPreDefinedTextFont from "./IfcPreDefinedTextFont.bldrs"
import IfcExternallyDefinedTextFont from "./IfcExternallyDefinedTextFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextfontselect.htm
 */

export default class IfcTextFontSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcTextFontSelectVariant ) {}
}

export type IfcTextFontSelectType = 'IfcPreDefinedTextFont'|'IfcExternallyDefinedTextFont';

export type IfcTextFontSelectChoices = IfcPreDefinedTextFont|IfcExternallyDefinedTextFont;

export type IfcTextFontSelectVariant = ({ type: 'IfcPreDefinedTextFont'; value: IfcPreDefinedTextFont }|{ type: 'IfcExternallyDefinedTextFont'; value: IfcExternallyDefinedTextFont }) & { type: IfcTextFontSelectType; value: IfcTextFontSelectChoices };

