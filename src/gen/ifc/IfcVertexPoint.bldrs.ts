
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPoint} from "./IfcPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
 */
export default class IfcVertexPoint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVertexPoint';

    public readonly __version__: number = 0;

	VertexGeometry : IfcPoint;

}

export class IfcVertexPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexPoint';

    public readonly required: string[] = [ 'IfcVertex', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'VertexGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint'
		}
    ];
}
