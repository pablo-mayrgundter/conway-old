
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcConstraint} from "./IfcConstraint.bldrs"
import {IfcLogicalOperatorEnum} from "./IfcLogicalOperatorEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintaggregationrelationship.htm
 */
export default class IfcConstraintAggregationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstraintAggregationRelationship';

    public readonly __version__: number = 0;

	Name? : IfcLabel;
	Description? : IfcText;
	RelatingConstraint : IfcConstraint;
	RelatedConstraints : Array<IfcConstraint>;
	LogicalAggregator : IfcLogicalOperatorEnum;

}

export class IfcConstraintAggregationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraintAggregationRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
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
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}, 
		{
			name: 'RelatedConstraints',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcConstraint>'
		}, 
		{
			name: 'LogicalAggregator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLogicalOperatorEnum'
		}
    ];
}
