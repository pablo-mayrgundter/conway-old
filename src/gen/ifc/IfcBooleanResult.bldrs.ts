
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBooleanOperator from "./IfcBooleanOperator.bldrs"
import IfcSolidModel from "./IfcSolidModel.bldrs"
import IfcHalfSpaceSolid from "./IfcHalfSpaceSolid.bldrs"
import IfcCsgPrimitive3D from "./IfcCsgPrimitive3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanresult.htm
 */
export default  class IfcBooleanResult extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcBooleanResultSpecification = IfcBooleanResultSpecification.instance;

private Operator_? : IfcBooleanOperator
    private FirstOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D
    private SecondOperand_? : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBooleanResultSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBooleanResult';

    public readonly required: ReadonlyArray< string > = [ 'IfcBooleanResult', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Operator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBooleanOperator',
			optional: false
		}, 
		{
			name: 'FirstOperand',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D',
			optional: false
		}, 
		{
			name: 'SecondOperand',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBooleanResultSpecification = new IfcBooleanResultSpecification();
}
