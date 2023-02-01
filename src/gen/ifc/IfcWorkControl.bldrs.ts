
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcWorkControlTypeEnum from "./IfcWorkControlTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcontrol.htm
 */
export default abstract class IfcWorkControl extends IfcControl 
{    
    public readonly specification: IfcWorkControlSpecification = IfcWorkControlSpecification.instance;

private Identifier_? : IfcIdentifier
    private CreationDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private Creators_? : Array<IfcPerson>
    private Purpose_? : IfcLabel
    private Duration_? : IfcTimeMeasure
    private TotalFloat_? : IfcTimeMeasure
    private StartTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private FinishTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private WorkControlType_? : IfcWorkControlTypeEnum
    private UserDefinedControlType_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcWorkControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWorkControl';

    public readonly required: ReadonlyArray< string > = [ 'IfcWorkControl', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'CreationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'Creators',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPerson>',
			optional: true
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Duration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'TotalFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'StartTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'FinishTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'WorkControlType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWorkControlTypeEnum',
			optional: true
		}, 
		{
			name: 'UserDefinedControlType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWorkControlSpecification = new IfcWorkControlSpecification();
}
