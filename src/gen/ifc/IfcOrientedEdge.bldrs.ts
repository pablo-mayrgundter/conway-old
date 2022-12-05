
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcEdge from "./IfcEdge.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm
 */
export default class IfcOrientedEdge implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOrientedEdge';

    public readonly __version__: number = 0;

    constructor( public readonly EdgeElement : IfcEdge , public readonly Orientation : boolean  ) {}
}

export class IfcOrientedEdgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrientedEdge';

    public readonly required: string[] = [ 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'EdgeElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEdge'
		}, 
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}
