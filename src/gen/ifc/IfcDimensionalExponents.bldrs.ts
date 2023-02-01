
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionalexponents.htm
 */
export default  class IfcDimensionalExponents extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDimensionalExponentsSpecification = IfcDimensionalExponentsSpecification.instance;

private LengthExponent_? : number
    private MassExponent_? : number
    private TimeExponent_? : number
    private ElectricCurrentExponent_? : number
    private ThermodynamicTemperatureExponent_? : number
    private AmountOfSubstanceExponent_? : number
    private LuminousIntensityExponent_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDimensionalExponentsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionalExponents';

    public readonly required: ReadonlyArray< string > = [ 'IfcDimensionalExponents' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LengthExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'MassExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'TimeExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'ElectricCurrentExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'ThermodynamicTemperatureExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'AmountOfSubstanceExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'LuminousIntensityExponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionalExponentsSpecification = new IfcDimensionalExponentsSpecification();
}
