
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsymbolstyle.htm
 */
export default class IfcSymbolStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSymbolStyle';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSymbolStyleSpecification = IfcSymbolStyleSpecification.instance;

    constructor( public readonly StyleOfSymbol : IfcColourSpecification|IfcPreDefinedColour  ) {}
}

export class IfcSymbolStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSymbolStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'StyleOfSymbol',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSymbolStyleSpecification = new IfcSymbolStyleSpecification();
}
