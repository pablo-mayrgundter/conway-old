
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
 */
export default abstract class IfcMaterialProperties extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMaterialPropertiesSpecification = IfcMaterialPropertiesSpecification.instance;

private Material_? : IfcMaterial

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Material',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialPropertiesSpecification = new IfcMaterialPropertiesSpecification();
}
