
import Component from "../../core/component"
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
export default abstract class IfcConstraint extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcConstraintSpecification = IfcConstraintSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private ConstraintGrade_? : IfcConstraintEnum
    private ConstraintSource_? : IfcLabel
    private CreatingActor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private CreationTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private UserDefinedGrade_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConstraintSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraint';

    public readonly required: ReadonlyArray< string > = [ 'IfcConstraint' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'ConstraintGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraintEnum',
			optional: false
		}, 
		{
			name: 'ConstraintSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'CreatingActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: true
		}, 
		{
			name: 'CreationTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'UserDefinedGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstraintSpecification = new IfcConstraintSpecification();
}
