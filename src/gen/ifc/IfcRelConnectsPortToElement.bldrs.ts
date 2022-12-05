
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm
 */
export default class IfcRelConnectsPortToElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsPortToElement';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingPort : IfcPort , public readonly RelatedElement : IfcElement  ) {}
}

export class IfcRelConnectsPortToElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPortToElement';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPort'
		}, 
		{
			name: 'RelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}
    ];
}
