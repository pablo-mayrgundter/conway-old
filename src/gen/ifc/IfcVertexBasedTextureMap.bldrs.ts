
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcTextureVertex from "./IfcTextureVertex.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexbasedtexturemap.htm
 */
export default class IfcVertexBasedTextureMap implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVertexBasedTextureMap';

    public readonly __version__: number = 0;

    constructor( public readonly TextureVertices : Array<IfcTextureVertex> , public readonly TexturePoints : Array<IfcCartesianPoint>  ) {}
}

export class IfcVertexBasedTextureMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexBasedTextureMap';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TextureVertices',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTextureVertex>'
		}, 
		{
			name: 'TexturePoints',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>'
		}
    ];
}
