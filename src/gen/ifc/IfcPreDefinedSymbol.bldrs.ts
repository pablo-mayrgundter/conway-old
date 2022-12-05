
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedsymbol.htm
 */
export default class IfcPreDefinedSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedSymbol';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcPreDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedSymbol';

    public readonly required: string[] = [ 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
