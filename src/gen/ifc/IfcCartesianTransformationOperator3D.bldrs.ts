
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm
 */
export default  class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator 
{    
    public readonly specification: IfcCartesianTransformationOperator3DSpecification = IfcCartesianTransformationOperator3DSpecification.instance;

private Axis3_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCartesianTransformationOperator3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator3D', 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis3',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator3DSpecification = new IfcCartesianTransformationOperator3DSpecification();
}
