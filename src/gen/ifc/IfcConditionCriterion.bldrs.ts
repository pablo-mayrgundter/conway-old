
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconditioncriterion.htm
 */
export default class IfcConditionCriterion implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConditionCriterion';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConditionCriterionSpecification = IfcConditionCriterionSpecification.instance;

    constructor( public readonly Criterion : IfcLabel|IfcMeasureWithUnit , public readonly CriterionDateTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  ) {}
}

export class IfcConditionCriterionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConditionCriterion';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConditionCriterionSpecification = new IfcConditionCriterionSpecification();
}
