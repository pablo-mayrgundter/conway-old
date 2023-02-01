
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBooleanResult from "./IfcBooleanResult.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgsolid.htm
 */
export default  class IfcCsgSolid extends IfcSolidModel 
{    
    public readonly specification: IfcCsgSolidSpecification = IfcCsgSolidSpecification.instance;

private TreeRootExpression_? : IfcBooleanResult|IfcCsgPrimitive3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCsgSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCsgSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcCsgSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TreeRootExpression',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBooleanResult|IfcCsgPrimitive3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCsgSolidSpecification = new IfcCsgSolidSpecification();
}
