
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIrregularTimeSeriesValue from "./IfcIrregularTimeSeriesValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseries.htm
 */
export default  class IfcIrregularTimeSeries extends IfcTimeSeries 
{    
    public readonly specification: IfcIrregularTimeSeriesSpecification = IfcIrregularTimeSeriesSpecification.instance;

private Values_? : Array<IfcIrregularTimeSeriesValue>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcIrregularTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcIrregularTimeSeries';

    public readonly required: ReadonlyArray< string > = [ 'IfcIrregularTimeSeries', 'IfcTimeSeries' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Values',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcIrregularTimeSeriesValue>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcIrregularTimeSeriesSpecification = new IfcIrregularTimeSeriesSpecification();
}
