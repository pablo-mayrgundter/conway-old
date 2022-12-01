
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcModulusOfSubgradeReactionMeasure} from "./IfcModulusOfSubgradeReactionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm
 */
export default class IfcBoundaryFaceCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundaryFaceCondition';

    public readonly __version__: number = 0;

	LinearStiffnessByAreaX? : IfcModulusOfSubgradeReactionMeasure;
	LinearStiffnessByAreaY? : IfcModulusOfSubgradeReactionMeasure;
	LinearStiffnessByAreaZ? : IfcModulusOfSubgradeReactionMeasure;

}

export class IfcBoundaryFaceConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryFaceCondition';

    public readonly required: string[] = [ 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LinearStiffnessByAreaX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure'
		}, 
		{
			name: 'LinearStiffnessByAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure'
		}, 
		{
			name: 'LinearStiffnessByAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure'
		}
    ];
}
