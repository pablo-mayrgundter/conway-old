
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcOpeningElement from "./IfcOpeningElement.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm
 */
export default class IfcRelFillsElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelFillsElement';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingOpeningElement : IfcOpeningElement , public readonly RelatedBuildingElement : IfcElement  ) {}
}

export class IfcRelFillsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelFillsElement';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingOpeningElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOpeningElement'
		}, 
		{
			name: 'RelatedBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}
    ];
}
