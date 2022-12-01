
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"
import {IfcCartesianPoint} from "./IfcCartesianPoint.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator.htm
 */
export default class IfcCartesianTransformationOperator implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator';

    public readonly __version__: number = 0;

	Axis1? : IfcDirection;
	Axis2? : IfcDirection;
	LocalOrigin : IfcCartesianPoint;
	Scale? : number;

}

export class IfcCartesianTransformationOperatorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
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
}
