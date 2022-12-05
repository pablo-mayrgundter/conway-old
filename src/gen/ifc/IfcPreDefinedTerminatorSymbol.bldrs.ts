
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedterminatorsymbol.htm
 */
export default class IfcPreDefinedTerminatorSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedTerminatorSymbol';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcPreDefinedTerminatorSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedTerminatorSymbol';

    public readonly required: string[] = [ 'IfcPreDefinedSymbol', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
