
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcHourInDay from "./IfcHourInDay.bldrs"
import IfcMinuteInHour from "./IfcMinuteInHour.bldrs"
import IfcAheadOrBehind from "./IfcAheadOrBehind.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinateduniversaltimeoffset.htm
 */
export default  class IfcCoordinatedUniversalTimeOffset extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCoordinatedUniversalTimeOffsetSpecification = IfcCoordinatedUniversalTimeOffsetSpecification.instance;

private HourOffset_? : IfcHourInDay
    private MinuteOffset_? : IfcMinuteInHour
    private Sense_? : IfcAheadOrBehind

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCoordinatedUniversalTimeOffsetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCoordinatedUniversalTimeOffset';

    public readonly required: ReadonlyArray< string > = [ 'IfcCoordinatedUniversalTimeOffset' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HourOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHourInDay',
			optional: false
		}, 
		{
			name: 'MinuteOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMinuteInHour',
			optional: true
		}, 
		{
			name: 'Sense',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAheadOrBehind',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCoordinatedUniversalTimeOffsetSpecification = new IfcCoordinatedUniversalTimeOffsetSpecification();
}
