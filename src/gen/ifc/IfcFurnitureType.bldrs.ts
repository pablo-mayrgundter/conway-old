
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAssemblyPlaceEnum from "./IfcAssemblyPlaceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurnituretype.htm
 */
export default  class IfcFurnitureType extends IfcFurnishingElementType 
{    
    public readonly specification: IfcFurnitureTypeSpecification = IfcFurnitureTypeSpecification.instance;

private AssemblyPlace_? : IfcAssemblyPlaceEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFurnitureTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFurnitureType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFurnitureType', 'IfcFurnishingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AssemblyPlace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAssemblyPlaceEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFurnitureTypeSpecification = new IfcFurnitureTypeSpecification();
}
