
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcVertex} from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
 */
export default class IfcVertexLoop implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVertexLoop';

    public readonly __version__: number = 0;

	LoopVertex : IfcVertex;

}

export class IfcVertexLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexLoop';

    public readonly required: string[] = [ 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LoopVertex',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex'
		}
    ];
}
