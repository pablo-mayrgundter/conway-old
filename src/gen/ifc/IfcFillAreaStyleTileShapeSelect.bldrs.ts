
import IfcFillAreaStyleTileSymbolWithStyle from "./IfcFillAreaStyleTileSymbolWithStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletileshapeselect.htm
 */

export default class IfcFillAreaStyleTileShapeSelect
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcFillAreaStyleTileShapeSelectVariant ) {}
}

export type IfcFillAreaStyleTileShapeSelectType = 'IfcFillAreaStyleTileSymbolWithStyle';

export type IfcFillAreaStyleTileShapeSelectChoices = IfcFillAreaStyleTileSymbolWithStyle;

export type IfcFillAreaStyleTileShapeSelectVariant = ({ type: 'IfcFillAreaStyleTileSymbolWithStyle'; value: IfcFillAreaStyleTileSymbolWithStyle }) & { type: IfcFillAreaStyleTileShapeSelectType; value: IfcFillAreaStyleTileShapeSelectChoices };

