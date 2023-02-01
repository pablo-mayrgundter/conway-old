
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm
 */
export default  class IfcPolyLoop extends IfcLoop 
{    
    public readonly specification: IfcPolyLoopSpecification = IfcPolyLoopSpecification.instance;

private Polygon_? : Array<IfcCartesianPoint>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPolyLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPolyLoop';

    public readonly required: ReadonlyArray< string > = [ 'IfcPolyLoop', 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Polygon',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPolyLoopSpecification = new IfcPolyLoopSpecification();
}
