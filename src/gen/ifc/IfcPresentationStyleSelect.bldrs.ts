
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcSymbolStyle from "./IfcSymbolStyle.bldrs"
import IfcFillAreaStyle from "./IfcFillAreaStyle.bldrs"
import IfcTextStyle from "./IfcTextStyle.bldrs"
import IfcSurfaceStyle from "./IfcSurfaceStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleselect.htm
 */

export default class IfcPresentationStyleSelect
{
    constructor( public readonly value: IfcPresentationStyleSelectVariant ) {}
}

export type IfcPresentationStyleSelectType = 'IfcCurveStyle'|'IfcSymbolStyle'|'IfcFillAreaStyle'|'IfcTextStyle'|'IfcSurfaceStyle';

export type IfcPresentationStyleSelectChoices = IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle;

export type IfcPresentationStyleSelectVariant = ({ type: 'IfcCurveStyle'; value: IfcCurveStyle }|{ type: 'IfcSymbolStyle'; value: IfcSymbolStyle }|{ type: 'IfcFillAreaStyle'; value: IfcFillAreaStyle }|{ type: 'IfcTextStyle'; value: IfcTextStyle }|{ type: 'IfcSurfaceStyle'; value: IfcSurfaceStyle }) & { type: IfcPresentationStyleSelectType; value: IfcPresentationStyleSelectChoices };

export function IfcPresentationStyleSelectSerializer( value?: IfcPresentationStyleSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
