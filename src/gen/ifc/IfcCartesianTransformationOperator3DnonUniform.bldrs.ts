
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm
 */
export default class IfcCartesianTransformationOperator3DnonUniform implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator3DnonUniform';

    public readonly __version__: number = 0;

    constructor( public readonly Scale2 : number  | undefined, public readonly Scale3 : number  | undefined ) {}
}

export class IfcCartesianTransformationOperator3DnonUniformSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator3DnonUniform';

    public readonly required: string[] = [ 'IfcCartesianTransformationOperator3D', 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Scale2',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'Scale3',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];
}
