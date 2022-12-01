
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProperty} from "./IfcProperty.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm
 */
export default class IfcPropertyDependencyRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPropertyDependencyRelationship';

    public readonly __version__: number = 0;

	DependingProperty : IfcProperty;
	DependantProperty : IfcProperty;
	Name? : IfcLabel;
	Description? : IfcText;
	Expression? : IfcText;

}

export class IfcPropertyDependencyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertyDependencyRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DependingProperty',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProperty'
		}, 
		{
			name: 'DependantProperty',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProperty'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Expression',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
