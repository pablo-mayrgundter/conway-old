
import IfcTextStyleForDefinedFont from "./IfcTextStyleForDefinedFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccharacterstyleselect.htm
 */

export default class IfcCharacterStyleSelect
{
    constructor( public readonly value: IfcCharacterStyleSelectVariant ) {}
}

export type IfcCharacterStyleSelectType = 'IfcTextStyleForDefinedFont';

export type IfcCharacterStyleSelectChoices = IfcTextStyleForDefinedFont;

export type IfcCharacterStyleSelectVariant = ({ type: 'IfcTextStyleForDefinedFont'; value: IfcTextStyleForDefinedFont }) & { type: IfcCharacterStyleSelectType; value: IfcCharacterStyleSelectChoices };

export function IfcCharacterStyleSelectSerializer( value?: IfcCharacterStyleSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
