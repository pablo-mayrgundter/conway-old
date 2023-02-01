
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdateandtime.htm
 */
export default  class IfcDateAndTime extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDateAndTimeSpecification = IfcDateAndTimeSpecification.instance;

private DateComponent_? : IfcCalendarDate
    private TimeComponent_? : IfcLocalTime

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDateAndTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDateAndTime';

    public readonly required: ReadonlyArray< string > = [ 'IfcDateAndTime' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DateComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: false
		}, 
		{
			name: 'TimeComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLocalTime',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDateAndTimeSpecification = new IfcDateAndTimeSpecification();
}
