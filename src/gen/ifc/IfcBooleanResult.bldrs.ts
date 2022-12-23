
import Component from "../../core/components"
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
export default class IfcBooleanResult implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBooleanResult';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBooleanResultSpecification = IfcBooleanResultSpecification.instance;

    constructor( public readonly Operator : IfcBooleanOperator , public readonly FirstOperand : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D , public readonly SecondOperand : IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D  ) {}
}

export class IfcBooleanResultSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBooleanResult';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Operator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBooleanOperator'
		}, 
		{
			name: 'FirstOperand',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D'
		}, 
		{
			name: 'SecondOperand',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSolidModel|IfcHalfSpaceSolid|IfcBooleanResult|IfcCsgPrimitive3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBooleanResultSpecification = new IfcBooleanResultSpecification();
}
