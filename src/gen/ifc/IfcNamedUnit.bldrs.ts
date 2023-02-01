
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionalExponents from "./IfcDimensionalExponents.bldrs"
import IfcUnitEnum from "./IfcUnitEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnamedunit.htm
 */
export default abstract class IfcNamedUnit extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcNamedUnitSpecification = IfcNamedUnitSpecification.instance;

private Dimensions_? : IfcDimensionalExponents
    private UnitType_? : IfcUnitEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcNamedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcNamedUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Dimensions',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionalExponents',
			optional: false
		}, 
		{
			name: 'UnitType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcUnitEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcNamedUnitSpecification = new IfcNamedUnitSpecification();
}
