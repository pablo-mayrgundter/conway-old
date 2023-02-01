
import IfcPreDefinedSymbol from "./IfcPreDefinedSymbol.bldrs"
import IfcExternallyDefinedSymbol from "./IfcExternallyDefinedSymbol.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdefinedsymbolselect.htm
 */

export default class IfcDefinedSymbolSelect
{
    constructor( public readonly value: IfcDefinedSymbolSelectVariant ) {}
}

export type IfcDefinedSymbolSelectType = 'IfcPreDefinedSymbol'|'IfcExternallyDefinedSymbol';

export type IfcDefinedSymbolSelectChoices = IfcPreDefinedSymbol|IfcExternallyDefinedSymbol;

export type IfcDefinedSymbolSelectVariant = ({ type: 'IfcPreDefinedSymbol'; value: IfcPreDefinedSymbol }|{ type: 'IfcExternallyDefinedSymbol'; value: IfcExternallyDefinedSymbol }) & { type: IfcDefinedSymbolSelectType; value: IfcDefinedSymbolSelectChoices };

export function IfcDefinedSymbolSelectSerializer( value?: IfcDefinedSymbolSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
