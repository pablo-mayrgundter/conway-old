
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcRatioMeasure} from "./IfcRatioMeasure.bldrs"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.bldrs"
import {IfcMonetaryMeasure} from "./IfcMonetaryMeasure.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"
import {IfcReferencesValueDocument} from "./IfcReferencesValueDocument.bldrs"
import {IfcAppliedValueRelationship} from "./IfcAppliedValueRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalue.htm
 */
export default class IfcAppliedValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAppliedValue';

    public readonly __version__: number = 0;

	Name? : IfcLabel;
	Description? : IfcText;
	AppliedValue? : IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure;
	UnitBasis? : IfcMeasureWithUnit;
	ApplicableDate? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	FixedUntilDate? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;

}

export class IfcAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAppliedValue';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

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
			name: 'AppliedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure'
		}, 
		{
			name: 'UnitBasis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit'
		}, 
		{
			name: 'ApplicableDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'FixedUntilDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}
    ];
}
