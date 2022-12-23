
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedterminatorsymbol.htm
 */
export default class IfcPreDefinedTerminatorSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedTerminatorSymbol';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPreDefinedTerminatorSymbolSpecification = IfcPreDefinedTerminatorSymbolSpecification.instance;

    constructor(  ) {}
}

export class IfcPreDefinedTerminatorSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedTerminatorSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedSymbol', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPreDefinedTerminatorSymbolSpecification = new IfcPreDefinedTerminatorSymbolSpecification();
}
