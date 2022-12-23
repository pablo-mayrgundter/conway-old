
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedsymbol.htm
 */
export default class IfcExternallyDefinedSymbol implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcExternallyDefinedSymbol';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcExternallyDefinedSymbolSpecification = IfcExternallyDefinedSymbolSpecification.instance;

    constructor(  ) {}
}

export class IfcExternallyDefinedSymbolSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExternallyDefinedSymbol';

    public readonly required: ReadonlyArray< string > = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcExternallyDefinedSymbolSpecification = new IfcExternallyDefinedSymbolSpecification();
}
