
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldecomposes.htm
 */
export default abstract class IfcRelDecomposes extends IfcRelationship 
{    
    public readonly specification: IfcRelDecomposesSpecification = IfcRelDecomposesSpecification.instance;

private RelatingObject_? : IfcObjectDefinition
    private RelatedObjects_? : Array<IfcObjectDefinition>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelDecomposesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDecomposes';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDecomposes', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingObject',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectDefinition',
			optional: false
		}, 
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObjectDefinition>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDecomposesSpecification = new IfcRelDecomposesSpecification();
}
