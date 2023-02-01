
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDayInMonthNumber from "./IfcDayInMonthNumber.bldrs"
import IfcMonthInYearNumber from "./IfcMonthInYearNumber.bldrs"
import IfcYearNumber from "./IfcYearNumber.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccalendardate.htm
 */
export default  class IfcCalendarDate extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCalendarDateSpecification = IfcCalendarDateSpecification.instance;

private DayComponent_? : IfcDayInMonthNumber
    private MonthComponent_? : IfcMonthInYearNumber
    private YearComponent_? : IfcYearNumber

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCalendarDateSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCalendarDate';

    public readonly required: ReadonlyArray< string > = [ 'IfcCalendarDate' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DayComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDayInMonthNumber',
			optional: false
		}, 
		{
			name: 'MonthComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonthInYearNumber',
			optional: false
		}, 
		{
			name: 'YearComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcYearNumber',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCalendarDateSpecification = new IfcCalendarDateSpecification();
}
