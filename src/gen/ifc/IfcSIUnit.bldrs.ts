
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSIPrefix from "./IfcSIPrefix.bldrs"
import IfcSIUnitName from "./IfcSIUnitName.bldrs"
import IfcDimensionalExponents from "./IfcDimensionalExponents.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsiunit.htm
 */
export default  class IfcSIUnit extends IfcNamedUnit 
{    
    public readonly specification: IfcSIUnitSpecification = IfcSIUnitSpecification.instance;

private Prefix_? : IfcSIPrefix
    private Name_? : IfcSIUnitName

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSIUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSIUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcSIUnit', 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Prefix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSIPrefix',
			optional: true
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSIUnitName',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSIUnitSpecification = new IfcSIUnitSpecification();
}
