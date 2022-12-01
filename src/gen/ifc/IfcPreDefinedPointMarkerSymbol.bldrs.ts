
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedpointmarkersymbol.htm
 */
export default class IfcPreDefinedPointMarkerSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedPointMarkerSymbol';

    public readonly __version__: number = 0;


}

export class IfcPreDefinedPointMarkerSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedPointMarkerSymbol';

    public readonly required: string[] = [ 'IfcPreDefinedSymbol', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
