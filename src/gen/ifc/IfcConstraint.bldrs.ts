
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcConstraintEnum from "./IfcConstraintEnum.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcConstraintClassificationRelationship from "./IfcConstraintClassificationRelationship.bldrs"
import IfcConstraintRelationship from "./IfcConstraintRelationship.bldrs"
import IfcPropertyConstraintRelationship from "./IfcPropertyConstraintRelationship.bldrs"
import IfcConstraintAggregationRelationship from "./IfcConstraintAggregationRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraint.htm
 */
export default class IfcConstraint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstraint';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConstraintSpecification = IfcConstraintSpecification.instance;

    constructor( public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined, public readonly ConstraintGrade : IfcConstraintEnum , public readonly ConstraintSource : IfcLabel  | undefined, public readonly CreatingActor : IfcOrganization|IfcPerson|IfcPersonAndOrganization  | undefined, public readonly CreationTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly UserDefinedGrade : IfcLabel  | undefined ) {}
}

export class IfcConstraintSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraint';

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
			name: 'ConstraintGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraintEnum'
		}, 
		{
			name: 'ConstraintSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'CreatingActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'CreationTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'UserDefinedGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstraintSpecification = new IfcConstraintSpecification();
}
