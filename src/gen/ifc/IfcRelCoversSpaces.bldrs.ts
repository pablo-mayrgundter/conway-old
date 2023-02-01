
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpace from "./IfcSpace.bldrs"
import IfcCovering from "./IfcCovering.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversspaces.htm
 */
export default  class IfcRelCoversSpaces extends IfcRelConnects 
{    
    public readonly specification: IfcRelCoversSpacesSpecification = IfcRelCoversSpacesSpecification.instance;

private RelatedSpace_? : IfcSpace
    private RelatedCoverings_? : Array<IfcCovering>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelCoversSpacesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelCoversSpaces';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelCoversSpaces', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpace',
			optional: false
		}, 
		{
			name: 'RelatedCoverings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCovering>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelCoversSpacesSpecification = new IfcRelCoversSpacesSpecification();
}
