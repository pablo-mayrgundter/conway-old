
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgprimitive3d.htm
 */
export default abstract class IfcCsgPrimitive3D extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcCsgPrimitive3DSpecification = IfcCsgPrimitive3DSpecification.instance;

private Position_? : IfcAxis2Placement3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCsgPrimitive3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCsgPrimitive3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCsgPrimitive3D', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCsgPrimitive3DSpecification = new IfcCsgPrimitive3DSpecification();
}
