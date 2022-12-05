
import IfcCurveStyleFontSelect from "./IfcCurveStyleFontSelect.bldrs"
import IfcCurveStyleFontAndScaling from "./IfcCurveStyleFontAndScaling.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvefontorscaledcurvefontselect.htm
 */

export default class IfcCurveFontOrScaledCurveFontSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcCurveFontOrScaledCurveFontSelectVariant ) {}
}

export type IfcCurveFontOrScaledCurveFontSelectType = 'IfcCurveStyleFontSelect'|'IfcCurveStyleFontAndScaling';

export type IfcCurveFontOrScaledCurveFontSelectChoices = IfcCurveStyleFontSelect|IfcCurveStyleFontAndScaling;

export type IfcCurveFontOrScaledCurveFontSelectVariant = ({ type: 'IfcCurveStyleFontSelect'; value: IfcCurveStyleFontSelect }|{ type: 'IfcCurveStyleFontAndScaling'; value: IfcCurveStyleFontAndScaling }) & { type: IfcCurveFontOrScaledCurveFontSelectType; value: IfcCurveFontOrScaledCurveFontSelectChoices };

