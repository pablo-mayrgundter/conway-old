
import IfcSpecularExponent from "./IfcSpecularExponent.bldrs"
import IfcSpecularRoughness from "./IfcSpecularRoughness.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspecularhighlightselect.htm
 */

export default class IfcSpecularHighlightSelect
{
    constructor( public readonly value: IfcSpecularHighlightSelectVariant ) {}
}

export type IfcSpecularHighlightSelectType = 'IfcSpecularExponent'|'IfcSpecularRoughness';

export type IfcSpecularHighlightSelectChoices = IfcSpecularExponent|IfcSpecularRoughness;

export type IfcSpecularHighlightSelectVariant = ({ type: 'IfcSpecularExponent'; value: IfcSpecularExponent }|{ type: 'IfcSpecularRoughness'; value: IfcSpecularRoughness }) & { type: IfcSpecularHighlightSelectType; value: IfcSpecularHighlightSelectChoices };

export function IfcSpecularHighlightSelectSerializer( value?: IfcSpecularHighlightSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
