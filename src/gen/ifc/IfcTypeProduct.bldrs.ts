
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeproduct.htm
 */
export default  class IfcTypeProduct extends IfcTypeObject 
{    
    public readonly specification: IfcTypeProductSpecification = IfcTypeProductSpecification.instance;

private RepresentationMaps_? : Array<IfcRepresentationMap>
    private Tag_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTypeProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTypeProduct';

    public readonly required: ReadonlyArray< string > = [ 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepresentationMaps',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationMap>',
			optional: true
		}, 
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTypeProductSpecification = new IfcTypeProductSpecification();
}
