
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcReal from "./IfcReal.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerefraction.htm
 */
export default  class IfcSurfaceStyleRefraction extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSurfaceStyleRefractionSpecification = IfcSurfaceStyleRefractionSpecification.instance;

private RefractionIndex_? : IfcReal
    private DispersionFactor_? : IfcReal

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceStyleRefractionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleRefraction';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceStyleRefraction' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RefractionIndex',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: true
		}, 
		{
			name: 'DispersionFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleRefractionSpecification = new IfcSurfaceStyleRefractionSpecification();
}
