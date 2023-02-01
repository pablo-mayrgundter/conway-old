
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFace from "./IfcFace.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectedfaceset.htm
 */
export default  class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem 
{    
    public readonly specification: IfcConnectedFaceSetSpecification = IfcConnectedFaceSetSpecification.instance;

private CfsFaces_? : Array<IfcFace>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectedFaceSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectedFaceSet';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectedFaceSet', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CfsFaces',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFace>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectedFaceSetSpecification = new IfcConnectedFaceSetSpecification();
}
