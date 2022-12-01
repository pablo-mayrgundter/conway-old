
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure.bldrs"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm
 */
export default class IfcBoundaryNodeCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundaryNodeCondition';

    public readonly __version__: number = 0;

	LinearStiffnessX? : IfcLinearStiffnessMeasure;
	LinearStiffnessY? : IfcLinearStiffnessMeasure;
	LinearStiffnessZ? : IfcLinearStiffnessMeasure;
	RotationalStiffnessX? : IfcRotationalStiffnessMeasure;
	RotationalStiffnessY? : IfcRotationalStiffnessMeasure;
	RotationalStiffnessZ? : IfcRotationalStiffnessMeasure;

}

export class IfcBoundaryNodeConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryNodeCondition';

    public readonly required: string[] = [ 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LinearStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'LinearStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'LinearStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}
    ];
}
