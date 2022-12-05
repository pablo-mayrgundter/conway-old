
import IfcSpecularExponent from "./IfcSpecularExponent.bldrs"
import IfcSpecularRoughness from "./IfcSpecularRoughness.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspecularhighlightselect.htm
 */

export default class IfcSpecularHighlightSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcSpecularHighlightSelectVariant ) {}
}

export type IfcSpecularHighlightSelectType = 'IfcSpecularExponent'|'IfcSpecularRoughness';

export type IfcSpecularHighlightSelectChoices = IfcSpecularExponent|IfcSpecularRoughness;

export type IfcSpecularHighlightSelectVariant = ({ type: 'IfcSpecularExponent'; value: IfcSpecularExponent }|{ type: 'IfcSpecularRoughness'; value: IfcSpecularRoughness }) & { type: IfcSpecularHighlightSelectType; value: IfcSpecularHighlightSelectChoices };

