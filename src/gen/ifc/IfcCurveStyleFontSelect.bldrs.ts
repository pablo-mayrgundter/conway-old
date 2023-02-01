
import IfcPreDefinedCurveFont from "./IfcPreDefinedCurveFont.bldrs"
import IfcCurveStyleFont from "./IfcCurveStyleFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontselect.htm
 */

export default class IfcCurveStyleFontSelect
{
    constructor( public readonly value: IfcCurveStyleFontSelectVariant ) {}
}

export type IfcCurveStyleFontSelectType = 'IfcPreDefinedCurveFont'|'IfcCurveStyleFont';

export type IfcCurveStyleFontSelectChoices = IfcPreDefinedCurveFont|IfcCurveStyleFont;

export type IfcCurveStyleFontSelectVariant = ({ type: 'IfcPreDefinedCurveFont'; value: IfcPreDefinedCurveFont }|{ type: 'IfcCurveStyleFont'; value: IfcCurveStyleFont }) & { type: IfcCurveStyleFontSelectType; value: IfcCurveStyleFontSelectChoices };

export function IfcCurveStyleFontSelectSerializer( value?: IfcCurveStyleFontSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
