
import IfcFillAreaStyleTileSymbolWithStyle from "./IfcFillAreaStyleTileSymbolWithStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletileshapeselect.htm
 */

export default class IfcFillAreaStyleTileShapeSelect
{
    constructor( public readonly value: IfcFillAreaStyleTileShapeSelectVariant ) {}
}

export type IfcFillAreaStyleTileShapeSelectType = 'IfcFillAreaStyleTileSymbolWithStyle';

export type IfcFillAreaStyleTileShapeSelectChoices = IfcFillAreaStyleTileSymbolWithStyle;

export type IfcFillAreaStyleTileShapeSelectVariant = ({ type: 'IfcFillAreaStyleTileSymbolWithStyle'; value: IfcFillAreaStyleTileSymbolWithStyle }) & { type: IfcFillAreaStyleTileShapeSelectType; value: IfcFillAreaStyleTileShapeSelectChoices };

export function IfcFillAreaStyleTileShapeSelectSerializer( value?: IfcFillAreaStyleTileShapeSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
