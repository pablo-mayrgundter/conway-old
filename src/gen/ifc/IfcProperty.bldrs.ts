
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPropertyDependencyRelationship from "./IfcPropertyDependencyRelationship.bldrs"
import IfcComplexProperty from "./IfcComplexProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm
 */
export default class IfcProperty implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProperty';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcIdentifier , public readonly Description : IfcText  | undefined ) {}
}

export class IfcPropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProperty';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
