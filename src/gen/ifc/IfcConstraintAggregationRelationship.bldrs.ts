
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcLogicalOperatorEnum from "./IfcLogicalOperatorEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintaggregationrelationship.htm
 */
export default class IfcConstraintAggregationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstraintAggregationRelationship';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConstraintAggregationRelationshipSpecification = IfcConstraintAggregationRelationshipSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined, public readonly RelatingConstraint : IfcConstraint , public readonly RelatedConstraints : Array<IfcConstraint> , public readonly LogicalAggregator : IfcLogicalOperatorEnum  ) {}
}

export class IfcConstraintAggregationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraintAggregationRelationship';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}, 
		{
			name: 'RelatedConstraints',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcConstraint>'
		}, 
		{
			name: 'LogicalAggregator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLogicalOperatorEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstraintAggregationRelationshipSpecification = new IfcConstraintAggregationRelationshipSpecification();
}
