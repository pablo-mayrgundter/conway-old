
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconditioncriterion.htm
 */
export default class IfcConditionCriterion implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConditionCriterion';

    public readonly __version__: number = 0;

	Criterion : IfcLabel|IfcMeasureWithUnit;
	CriterionDateTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;

}

export class IfcConditionCriterionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConditionCriterion';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Criterion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel|IfcMeasureWithUnit'
		}, 
		{
			name: 'CriterionDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}
    ];
}
