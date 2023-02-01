
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSystem from "./IfcSystem.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelservicesbuildings.htm
 */
export default  class IfcRelServicesBuildings extends IfcRelConnects 
{    
    public readonly specification: IfcRelServicesBuildingsSpecification = IfcRelServicesBuildingsSpecification.instance;

private RelatingSystem_? : IfcSystem
    private RelatedBuildings_? : Array<IfcSpatialStructureElement>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelServicesBuildingsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelServicesBuildings';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelServicesBuildings', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSystem',
			optional: false
		}, 
		{
			name: 'RelatedBuildings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSpatialStructureElement>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelServicesBuildingsSpecification = new IfcRelServicesBuildingsSpecification();
}
