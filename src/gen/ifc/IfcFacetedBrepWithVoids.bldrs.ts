
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClosedShell from "./IfcClosedShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
 */
export default  class IfcFacetedBrepWithVoids extends IfcManifoldSolidBrep 
{    
    public readonly specification: IfcFacetedBrepWithVoidsSpecification = IfcFacetedBrepWithVoidsSpecification.instance;

private Voids_? : Array<IfcClosedShell>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFacetedBrepWithVoidsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFacetedBrepWithVoids';

    public readonly required: ReadonlyArray< string > = [ 'IfcFacetedBrepWithVoids', 'IfcManifoldSolidBrep', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Voids',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClosedShell>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFacetedBrepWithVoidsSpecification = new IfcFacetedBrepWithVoidsSpecification();
}
