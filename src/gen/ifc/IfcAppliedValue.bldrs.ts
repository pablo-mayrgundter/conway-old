
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcMonetaryMeasure from "./IfcMonetaryMeasure.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcReferencesValueDocument from "./IfcReferencesValueDocument.bldrs"
import IfcAppliedValueRelationship from "./IfcAppliedValueRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalue.htm
 */
export default class IfcAppliedValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAppliedValue';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAppliedValueSpecification = IfcAppliedValueSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined, public readonly AppliedValue : IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure  | undefined, public readonly UnitBasis : IfcMeasureWithUnit  | undefined, public readonly ApplicableDate : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly FixedUntilDate : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined ) {}
}

export class IfcAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAppliedValue';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAppliedValueSpecification = new IfcAppliedValueSpecification();
}
