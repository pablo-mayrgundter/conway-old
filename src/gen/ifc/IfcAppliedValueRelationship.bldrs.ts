
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAppliedValue} from "./IfcAppliedValue.bldrs"
import {IfcArithmeticOperatorEnum} from "./IfcArithmeticOperatorEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvaluerelationship.htm
 */
export default class IfcAppliedValueRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAppliedValueRelationship';

    public readonly __version__: number = 0;

	ComponentOfTotal : IfcAppliedValue;
	Components : Array<IfcAppliedValue>;
	ArithmeticOperator : IfcArithmeticOperatorEnum;
	Name? : IfcLabel;
	Description? : IfcText;

}

export class IfcAppliedValueRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAppliedValueRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ComponentOfTotal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAppliedValue'
		}, 
		{
			name: 'Components',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAppliedValue>'
		}, 
		{
			name: 'ArithmeticOperator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcArithmeticOperatorEnum'
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
		}
    ];
}
