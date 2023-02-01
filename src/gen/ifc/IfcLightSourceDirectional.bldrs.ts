
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcedirectional.htm
 */
export default  class IfcLightSourceDirectional extends IfcLightSource 
{    
    public readonly specification: IfcLightSourceDirectionalSpecification = IfcLightSourceDirectionalSpecification.instance;

private Orientation_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightSourceDirectionalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceDirectional';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSourceDirectional', 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceDirectionalSpecification = new IfcLightSourceDirectionalSpecification();
}
