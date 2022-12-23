
import Component from "../../core/components"
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
export default class IfcCoordinatedUniversalTimeOffset implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCoordinatedUniversalTimeOffset';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCoordinatedUniversalTimeOffsetSpecification = IfcCoordinatedUniversalTimeOffsetSpecification.instance;

    constructor( public readonly HourOffset : IfcHourInDay , public readonly MinuteOffset : IfcMinuteInHour  | undefined, public readonly Sense : IfcAheadOrBehind  ) {}
}

export class IfcCoordinatedUniversalTimeOffsetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCoordinatedUniversalTimeOffset';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HourOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHourInDay'
		}, 
		{
			name: 'MinuteOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMinuteInHour'
		}, 
		{
			name: 'Sense',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAheadOrBehind'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCoordinatedUniversalTimeOffsetSpecification = new IfcCoordinatedUniversalTimeOffsetSpecification();
}
