
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFaceBound from "./IfcFaceBound.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm
 */
export default  class IfcFace extends IfcTopologicalRepresentationItem 
{    
    public readonly specification: IfcFaceSpecification = IfcFaceSpecification.instance;

private Bounds_? : Array<IfcFaceBound>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFace';

    public readonly required: ReadonlyArray< string > = [ 'IfcFace', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Bounds',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFaceBound>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFaceSpecification = new IfcFaceSpecification();
}
