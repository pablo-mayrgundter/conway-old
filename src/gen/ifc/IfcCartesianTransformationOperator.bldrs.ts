
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator.htm
 */
export default abstract class IfcCartesianTransformationOperator extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcCartesianTransformationOperatorSpecification = IfcCartesianTransformationOperatorSpecification.instance;

private Axis1_? : IfcDirection
    private Axis2_? : IfcDirection
    private LocalOrigin_? : IfcCartesianPoint
    private Scale_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCartesianTransformationOperatorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}, 
		{
			name: 'Axis2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}, 
		{
			name: 'LocalOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: false
		}, 
		{
			name: 'Scale',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperatorSpecification = new IfcCartesianTransformationOperatorSpecification();
}
