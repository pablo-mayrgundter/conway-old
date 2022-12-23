
import Component from "../../core/components"
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
export default class IfcCartesianTransformationOperator implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCartesianTransformationOperatorSpecification = IfcCartesianTransformationOperatorSpecification.instance;

    constructor( public readonly Axis1 : IfcDirection  | undefined, public readonly Axis2 : IfcDirection  | undefined, public readonly LocalOrigin : IfcCartesianPoint , public readonly Scale : number  | undefined ) {}
}

export class IfcCartesianTransformationOperatorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'Axis2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'LocalOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'Scale',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperatorSpecification = new IfcCartesianTransformationOperatorSpecification();
}
