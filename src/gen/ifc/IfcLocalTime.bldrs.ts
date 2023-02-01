
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcHourInDay from "./IfcHourInDay.bldrs"
import IfcMinuteInHour from "./IfcMinuteInHour.bldrs"
import IfcSecondInMinute from "./IfcSecondInMinute.bldrs"
import IfcCoordinatedUniversalTimeOffset from "./IfcCoordinatedUniversalTimeOffset.bldrs"
import IfcDaylightSavingHour from "./IfcDaylightSavingHour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocaltime.htm
 */
export default  class IfcLocalTime extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcLocalTimeSpecification = IfcLocalTimeSpecification.instance;

private HourComponent_? : IfcHourInDay
    private MinuteComponent_? : IfcMinuteInHour
    private SecondComponent_? : IfcSecondInMinute
    private Zone_? : IfcCoordinatedUniversalTimeOffset
    private DaylightSavingOffset_? : IfcDaylightSavingHour

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLocalTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLocalTime';

    public readonly required: ReadonlyArray< string > = [ 'IfcLocalTime' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HourComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHourInDay',
			optional: false
		}, 
		{
			name: 'MinuteComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMinuteInHour',
			optional: true
		}, 
		{
			name: 'SecondComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSecondInMinute',
			optional: true
		}, 
		{
			name: 'Zone',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoordinatedUniversalTimeOffset',
			optional: true
		}, 
		{
			name: 'DaylightSavingOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDaylightSavingHour',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLocalTimeSpecification = new IfcLocalTimeSpecification();
}
