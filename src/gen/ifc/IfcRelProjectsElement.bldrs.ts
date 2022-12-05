
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementAddition from "./IfcFeatureElementAddition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
 */
export default class IfcRelProjectsElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelProjectsElement';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingElement : IfcElement , public readonly RelatedFeatureElement : IfcFeatureElementAddition  ) {}
}

export class IfcRelProjectsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelProjectsElement';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedFeatureElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementAddition'
		}
    ];
}
