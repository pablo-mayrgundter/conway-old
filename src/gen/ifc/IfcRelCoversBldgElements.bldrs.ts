
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcCovering from "./IfcCovering.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversbldgelements.htm
 */
export default class IfcRelCoversBldgElements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelCoversBldgElements';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingBuildingElement : IfcElement , public readonly RelatedCoverings : Array<IfcCovering>  ) {}
}

export class IfcRelCoversBldgElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelCoversBldgElements';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedCoverings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCovering>'
		}
    ];
}