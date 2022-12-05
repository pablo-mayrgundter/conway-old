
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
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
export default class IfcTimeSeries implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTimeSeries';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined, public readonly StartTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime , public readonly EndTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime , public readonly TimeSeriesDataType : IfcTimeSeriesDataTypeEnum , public readonly DataOrigin : IfcDataOriginEnum , public readonly UserDefinedDataOrigin : IfcLabel  | undefined, public readonly Unit : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit  | undefined ) {}
}

export class IfcTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeries';

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
			name: 'StartTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'EndTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'TimeSeriesDataType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeriesDataTypeEnum'
		}, 
		{
			name: 'DataOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDataOriginEnum'
		}, 
		{
			name: 'UserDefinedDataOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit'
		}
    ];
}
