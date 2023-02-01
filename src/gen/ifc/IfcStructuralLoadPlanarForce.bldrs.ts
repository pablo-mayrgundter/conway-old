
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlanarForceMeasure from "./IfcPlanarForceMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm
 */
export default  class IfcStructuralLoadPlanarForce extends IfcStructuralLoadStatic 
{    
    public readonly specification: IfcStructuralLoadPlanarForceSpecification = IfcStructuralLoadPlanarForceSpecification.instance;

private PlanarForceX_? : IfcPlanarForceMeasure
    private PlanarForceY_? : IfcPlanarForceMeasure
    private PlanarForceZ_? : IfcPlanarForceMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadPlanarForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadPlanarForce';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadPlanarForce', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PlanarForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure',
			optional: true
		}, 
		{
			name: 'PlanarForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure',
			optional: true
		}, 
		{
			name: 'PlanarForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarForceMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadPlanarForceSpecification = new IfcStructuralLoadPlanarForceSpecification();
}
