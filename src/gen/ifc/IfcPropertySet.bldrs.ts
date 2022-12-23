
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm
 */
export default class IfcPropertySet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertySet';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPropertySetSpecification = IfcPropertySetSpecification.instance;

    constructor( public readonly HasProperties : Array<IfcProperty>  ) {}
}

export class IfcPropertySetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertySet';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HasProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertySetSpecification = new IfcPropertySetSpecification();
}
