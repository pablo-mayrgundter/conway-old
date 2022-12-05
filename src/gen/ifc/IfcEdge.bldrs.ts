
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm
 */
export default class IfcEdge implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEdge';

    public readonly __version__: number = 0;

    constructor( public readonly EdgeStart : IfcVertex , public readonly EdgeEnd : IfcVertex  ) {}
}

export class IfcEdgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdge';

    public readonly required: string[] = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'EdgeStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex'
		}, 
		{
			name: 'EdgeEnd',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex'
		}
    ];
}
