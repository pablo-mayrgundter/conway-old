
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBenchmarkEnum from "./IfcBenchmarkEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcTable from "./IfcTable.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmetric.htm
 */
export default  class IfcMetric extends IfcConstraint 
{    
    public readonly specification: IfcMetricSpecification = IfcMetricSpecification.instance;

private Benchmark_? : IfcBenchmarkEnum
    private ValueSource_? : IfcLabel
    private DataValue_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMetricSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMetric';

    public readonly required: ReadonlyArray< string > = [ 'IfcMetric', 'IfcConstraint' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Benchmark',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBenchmarkEnum',
			optional: false
		}, 
		{
			name: 'ValueSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'DataValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMetricSpecification = new IfcMetricSpecification();
}
