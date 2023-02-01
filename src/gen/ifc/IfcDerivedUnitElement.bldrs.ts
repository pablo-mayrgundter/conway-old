
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunitelement.htm
 */
export default  class IfcDerivedUnitElement extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDerivedUnitElementSpecification = IfcDerivedUnitElementSpecification.instance;

private Unit_? : IfcNamedUnit
    private Exponent_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDerivedUnitElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedUnitElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcDerivedUnitElement' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNamedUnit',
			optional: false
		}, 
		{
			name: 'Exponent',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDerivedUnitElementSpecification = new IfcDerivedUnitElementSpecification();
}
