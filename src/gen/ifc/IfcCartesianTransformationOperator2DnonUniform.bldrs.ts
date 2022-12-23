
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2dnonuniform.htm
 */
export default class IfcCartesianTransformationOperator2DnonUniform implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator2DnonUniform';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCartesianTransformationOperator2DnonUniformSpecification = IfcCartesianTransformationOperator2DnonUniformSpecification.instance;

    constructor( public readonly Scale2 : number  | undefined ) {}
}

export class IfcCartesianTransformationOperator2DnonUniformSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator2DnonUniform';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator2D', 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Scale2',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator2DnonUniformSpecification = new IfcCartesianTransformationOperator2DnonUniformSpecification();
}
