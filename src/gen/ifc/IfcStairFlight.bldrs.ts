
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstairflight.htm
 */
export default  class IfcStairFlight extends IfcBuildingElement 
{    
    public readonly specification: IfcStairFlightSpecification = IfcStairFlightSpecification.instance;

private NumberOfRiser_? : number
    private NumberOfTreads_? : number
    private RiserHeight_? : IfcPositiveLengthMeasure
    private TreadLength_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStairFlightSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStairFlight';

    public readonly required: ReadonlyArray< string > = [ 'IfcStairFlight', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NumberOfRiser',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}, 
		{
			name: 'NumberOfTreads',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}, 
		{
			name: 'RiserHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'TreadLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStairFlightSpecification = new IfcStairFlightSpecification();
}
