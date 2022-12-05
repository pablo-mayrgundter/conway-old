
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMetric from "./IfcMetric.bldrs"
import IfcObjectiveEnum from "./IfcObjectiveEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm
 */
export default class IfcObjective implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcObjective';

    public readonly __version__: number = 0;

    constructor( public readonly BenchmarkValues : IfcMetric  | undefined, public readonly ResultValues : IfcMetric  | undefined, public readonly ObjectiveQualifier : IfcObjectiveEnum , public readonly UserDefinedQualifier : IfcLabel  | undefined ) {}
}

export class IfcObjectiveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjective';

    public readonly required: string[] = [ 'IfcConstraint' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'BenchmarkValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMetric'
		}, 
		{
			name: 'ResultValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMetric'
		}, 
		{
			name: 'ObjectiveQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectiveEnum'
		}, 
		{
			name: 'UserDefinedQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
