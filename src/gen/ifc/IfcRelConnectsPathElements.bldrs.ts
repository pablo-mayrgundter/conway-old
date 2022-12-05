
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcConnectionTypeEnum from "./IfcConnectionTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm
 */
export default class IfcRelConnectsPathElements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsPathElements';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingPriorities : Array<number> , public readonly RelatedPriorities : Array<number> , public readonly RelatedConnectionType : IfcConnectionTypeEnum , public readonly RelatingConnectionType : IfcConnectionTypeEnum  ) {}
}

export class IfcRelConnectsPathElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPathElements';

    public readonly required: string[] = [ 'IfcRelConnectsElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingPriorities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>'
		}, 
		{
			name: 'RelatedPriorities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>'
		}, 
		{
			name: 'RelatedConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionTypeEnum'
		}, 
		{
			name: 'RelatingConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionTypeEnum'
		}
    ];
}
