
import IfcTextStyleForDefinedFont from "./IfcTextStyleForDefinedFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccharacterstyleselect.htm
 */

export default class IfcCharacterStyleSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcCharacterStyleSelectVariant ) {}
}

export type IfcCharacterStyleSelectType = 'IfcTextStyleForDefinedFont';

export type IfcCharacterStyleSelectChoices = IfcTextStyleForDefinedFont;

export type IfcCharacterStyleSelectVariant = ({ type: 'IfcTextStyleForDefinedFont'; value: IfcTextStyleForDefinedFont }) & { type: IfcCharacterStyleSelectType; value: IfcCharacterStyleSelectChoices };

