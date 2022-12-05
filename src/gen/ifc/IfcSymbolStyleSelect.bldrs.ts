
import IfcColour from "./IfcColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsymbolstyleselect.htm
 */

export default class IfcSymbolStyleSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcSymbolStyleSelectVariant ) {}
}

export type IfcSymbolStyleSelectType = 'IfcColour';

export type IfcSymbolStyleSelectChoices = IfcColour;

export type IfcSymbolStyleSelectVariant = ({ type: 'IfcColour'; value: IfcColour }) & { type: IfcSymbolStyleSelectType; value: IfcSymbolStyleSelectChoices };

