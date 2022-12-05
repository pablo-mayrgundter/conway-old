
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertexPoint from "./IfcVertexPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm
 */
export default class IfcConnectionPointGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionPointGeometry';

    public readonly __version__: number = 0;

    constructor( public readonly PointOnRelatingElement : IfcPoint|IfcVertexPoint , public readonly PointOnRelatedElement : IfcPoint|IfcVertexPoint  | undefined ) {}
}

export class IfcConnectionPointGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPointGeometry';

    public readonly required: string[] = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PointOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint|IfcVertexPoint'
		}, 
		{
			name: 'PointOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint|IfcVertexPoint'
		}
    ];
}
