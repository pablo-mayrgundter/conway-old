
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreloverridesproperties.htm
 */
export default class IfcRelOverridesProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelOverridesProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelOverridesPropertiesSpecification = IfcRelOverridesPropertiesSpecification.instance;

    constructor( public readonly OverridingProperties : Array<IfcProperty>  ) {}
}

export class IfcRelOverridesPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelOverridesProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDefinesByProperties', 'IfcRelDefines', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OverridingProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelOverridesPropertiesSpecification = new IfcRelOverridesPropertiesSpecification();
}
