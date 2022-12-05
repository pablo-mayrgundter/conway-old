
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
 */
export default class IfcRelAssociatesConstraint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesConstraint';

    public readonly __version__: number = 0;

    constructor( public readonly Intent : IfcLabel , public readonly RelatingConstraint : IfcConstraint  ) {}
}

export class IfcRelAssociatesConstraintSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesConstraint';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Intent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'RelatingConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}
    ];
}
