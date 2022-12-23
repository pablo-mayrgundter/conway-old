
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedsymbol.htm
 */
export default class IfcPreDefinedSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedSymbol';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPreDefinedSymbolSpecification = IfcPreDefinedSymbolSpecification.instance;

    constructor(  ) {}
}

export class IfcPreDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPreDefinedSymbolSpecification = new IfcPreDefinedSymbolSpecification();
}
