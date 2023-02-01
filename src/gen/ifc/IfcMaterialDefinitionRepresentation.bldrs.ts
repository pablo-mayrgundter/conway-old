
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinitionrepresentation.htm
 */
export default  class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation 
{    
    public readonly specification: IfcMaterialDefinitionRepresentationSpecification = IfcMaterialDefinitionRepresentationSpecification.instance;

private RepresentedMaterial_? : IfcMaterial

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialDefinitionRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialDefinitionRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialDefinitionRepresentation', 'IfcProductRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepresentedMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialDefinitionRepresentationSpecification = new IfcMaterialDefinitionRepresentationSpecification();
}
