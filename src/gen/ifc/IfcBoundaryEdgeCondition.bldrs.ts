
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcModulusOfLinearSubgradeReactionMeasure from "./IfcModulusOfLinearSubgradeReactionMeasure.bldrs"
import IfcModulusOfRotationalSubgradeReactionMeasure from "./IfcModulusOfRotationalSubgradeReactionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
 */
export default class IfcBoundaryEdgeCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundaryEdgeCondition';

    public readonly __version__: number = 0;

    constructor( public readonly LinearStiffnessByLengthX : IfcModulusOfLinearSubgradeReactionMeasure  | undefined, public readonly LinearStiffnessByLengthY : IfcModulusOfLinearSubgradeReactionMeasure  | undefined, public readonly LinearStiffnessByLengthZ : IfcModulusOfLinearSubgradeReactionMeasure  | undefined, public readonly RotationalStiffnessByLengthX : IfcModulusOfRotationalSubgradeReactionMeasure  | undefined, public readonly RotationalStiffnessByLengthY : IfcModulusOfRotationalSubgradeReactionMeasure  | undefined, public readonly RotationalStiffnessByLengthZ : IfcModulusOfRotationalSubgradeReactionMeasure  | undefined ) {}
}

export class IfcBoundaryEdgeConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryEdgeCondition';

    public readonly required: string[] = [ 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LinearStiffnessByLengthX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure'
		}, 
		{
			name: 'LinearStiffnessByLengthY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure'
		}, 
		{
			name: 'LinearStiffnessByLengthZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure'
		}, 
		{
			name: 'RotationalStiffnessByLengthX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure'
		}, 
		{
			name: 'RotationalStiffnessByLengthY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure'
		}, 
		{
			name: 'RotationalStiffnessByLengthZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure'
		}
    ];
}
