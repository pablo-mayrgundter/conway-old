
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeSeriesDataTypeEnum from "./IfcTimeSeriesDataTypeEnum.bldrs"
import IfcDataOriginEnum from "./IfcDataOriginEnum.bldrs"
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"
import IfcTimeSeriesReferenceRelationship from "./IfcTimeSeriesReferenceRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseries.htm
 */
export default abstract class IfcTimeSeries extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTimeSeriesSpecification = IfcTimeSeriesSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private StartTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private EndTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private TimeSeriesDataType_? : IfcTimeSeriesDataTypeEnum
    private DataOrigin_? : IfcDataOriginEnum
    private UserDefinedDataOrigin_? : IfcLabel
    private Unit_? : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeries';

    public readonly required: ReadonlyArray< string > = [ 'IfcTimeSeries' ];

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
			name: 'StartTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'EndTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'TimeSeriesDataType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeriesDataTypeEnum',
			optional: false
		}, 
		{
			name: 'DataOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDataOriginEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedDataOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTimeSeriesSpecification = new IfcTimeSeriesSpecification();
}
