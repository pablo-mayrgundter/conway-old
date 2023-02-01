
import IfcFillAreaStyleHatching from "./IfcFillAreaStyleHatching.bldrs"
import IfcFillAreaStyleTiles from "./IfcFillAreaStyleTiles.bldrs"
import IfcColour from "./IfcColour.bldrs"
import IfcExternallyDefinedHatchStyle from "./IfcExternallyDefinedHatchStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillstyleselect.htm
 */

export default class IfcFillStyleSelect
{
    constructor( public readonly value: IfcFillStyleSelectVariant ) {}
}

export type IfcFillStyleSelectType = 'IfcFillAreaStyleHatching'|'IfcFillAreaStyleTiles'|'IfcColour'|'IfcExternallyDefinedHatchStyle';

export type IfcFillStyleSelectChoices = IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColour|IfcExternallyDefinedHatchStyle;

export type IfcFillStyleSelectVariant = ({ type: 'IfcFillAreaStyleHatching'; value: IfcFillAreaStyleHatching }|{ type: 'IfcFillAreaStyleTiles'; value: IfcFillAreaStyleTiles }|{ type: 'IfcColour'; value: IfcColour }|{ type: 'IfcExternallyDefinedHatchStyle'; value: IfcExternallyDefinedHatchStyle }) & { type: IfcFillStyleSelectType; value: IfcFillStyleSelectChoices };

export function IfcFillStyleSelectSerializer( value?: IfcFillStyleSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
