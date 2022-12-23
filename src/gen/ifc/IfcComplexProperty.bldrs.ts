
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm
 */
export default class IfcComplexProperty implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcComplexProperty';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcComplexPropertySpecification = IfcComplexPropertySpecification.instance;

    constructor( public readonly UsageName : IfcIdentifier , public readonly HasProperties : Array<IfcProperty>  ) {}
}

export class IfcComplexPropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcComplexProperty';

    public readonly required: ReadonlyArray< string > = [ 'IfcProperty' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UsageName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'HasProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcComplexPropertySpecification = new IfcComplexPropertySpecification();
}
