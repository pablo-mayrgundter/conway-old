
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintclassificationrelationship.htm
 */
export default class IfcConstraintClassificationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstraintClassificationRelationship';

    public readonly __version__: number = 0;

    constructor( public readonly ClassifiedConstraint : IfcConstraint , public readonly RelatedClassifications : Array<IfcClassificationNotation|IfcClassificationReference>  ) {}
}

export class IfcConstraintClassificationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstraintClassificationRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ClassifiedConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConstraint'
		}, 
		{
			name: 'RelatedClassifications',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotation|IfcClassificationReference>'
		}
    ];
}