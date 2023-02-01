
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallist.htm
 */
export default  class IfcMaterialList extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMaterialListSpecification = IfcMaterialListSpecification.instance;

private Materials_? : Array<IfcMaterial>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialListSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialList';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialList' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Materials',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcMaterial>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialListSpecification = new IfcMaterialListSpecification();
}
