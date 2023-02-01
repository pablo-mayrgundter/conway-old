
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLibraryReference from "./IfcLibraryReference.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm
 */
export default  class IfcRelAssociatesLibrary extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesLibrarySpecification = IfcRelAssociatesLibrarySpecification.instance;

private RelatingLibrary_? : IfcLibraryReference|IfcLibraryInformation

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesLibrarySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesLibrary';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesLibrary', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingLibrary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLibraryReference|IfcLibraryInformation',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesLibrarySpecification = new IfcRelAssociatesLibrarySpecification();
}
