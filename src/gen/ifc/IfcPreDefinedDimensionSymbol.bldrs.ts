
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineddimensionsymbol.htm
 */
export default class IfcPreDefinedDimensionSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedDimensionSymbol';

    public readonly __version__: number = 0;


}

export class IfcPreDefinedDimensionSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedDimensionSymbol';

    public readonly required: string[] = [ 'IfcPreDefinedSymbol', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
