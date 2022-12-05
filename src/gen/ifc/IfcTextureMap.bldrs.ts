
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcVertexBasedTextureMap from "./IfcVertexBasedTextureMap.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturemap.htm
 */
export default class IfcTextureMap implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextureMap';

    public readonly __version__: number = 0;

    constructor( public readonly TextureMaps : Array<IfcVertexBasedTextureMap>  ) {}
}

export class IfcTextureMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureMap';

    public readonly required: string[] = [ 'IfcTextureCoordinate' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TextureMaps',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcVertexBasedTextureMap>'
		}
    ];
}
