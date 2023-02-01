
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcTimeSeriesValue from "./IfcTimeSeriesValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm
 */
export default  class IfcRegularTimeSeries extends IfcTimeSeries 
{    
    public readonly specification: IfcRegularTimeSeriesSpecification = IfcRegularTimeSeriesSpecification.instance;

private TimeStep_? : IfcTimeMeasure
    private Values_? : Array<IfcTimeSeriesValue>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRegularTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRegularTimeSeries';

    public readonly required: ReadonlyArray< string > = [ 'IfcRegularTimeSeries', 'IfcTimeSeries' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TimeStep',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: false
		}, 
		{
			name: 'Values',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTimeSeriesValue>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRegularTimeSeriesSpecification = new IfcRegularTimeSeriesSpecification();
}
