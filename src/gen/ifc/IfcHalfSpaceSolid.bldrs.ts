
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm
 */
export default  class IfcHalfSpaceSolid extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcHalfSpaceSolidSpecification = IfcHalfSpaceSolidSpecification.instance;

private BaseSurface_? : IfcSurface
    private AgreementFlag_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcHalfSpaceSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHalfSpaceSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcHalfSpaceSolid', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BaseSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface',
			optional: false
		}, 
		{
			name: 'AgreementFlag',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcHalfSpaceSolidSpecification = new IfcHalfSpaceSolidSpecification();
}
