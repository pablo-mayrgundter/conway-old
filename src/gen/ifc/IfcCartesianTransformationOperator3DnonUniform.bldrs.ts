
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm
 */
export default  class IfcCartesianTransformationOperator3DnonUniform extends IfcCartesianTransformationOperator3D 
{    
    public readonly specification: IfcCartesianTransformationOperator3DnonUniformSpecification = IfcCartesianTransformationOperator3DnonUniformSpecification.instance;

private Scale2_? : number
    private Scale3_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCartesianTransformationOperator3DnonUniformSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator3DnonUniform';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator3DnonUniform', 'IfcCartesianTransformationOperator3D', 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Scale2',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}, 
		{
			name: 'Scale3',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator3DnonUniformSpecification = new IfcCartesianTransformationOperator3DnonUniformSpecification();
}
