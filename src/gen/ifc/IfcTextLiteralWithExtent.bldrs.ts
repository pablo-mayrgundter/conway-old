
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlanarExtent from "./IfcPlanarExtent.bldrs"
import IfcBoxAlignment from "./IfcBoxAlignment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
 */
export default  class IfcTextLiteralWithExtent extends IfcTextLiteral 
{    
    public readonly specification: IfcTextLiteralWithExtentSpecification = IfcTextLiteralWithExtentSpecification.instance;

private Extent_? : IfcPlanarExtent
    private BoxAlignment_? : IfcBoxAlignment

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextLiteralWithExtentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextLiteralWithExtent';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextLiteralWithExtent', 'IfcTextLiteral', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Extent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarExtent',
			optional: false
		}, 
		{
			name: 'BoxAlignment',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoxAlignment',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextLiteralWithExtentSpecification = new IfcTextLiteralWithExtentSpecification();
}
