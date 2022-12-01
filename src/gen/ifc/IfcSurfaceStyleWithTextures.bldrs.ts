
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylewithtextures.htm
 */
export default class IfcSurfaceStyleWithTextures implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleWithTextures';

    public readonly __version__: number = 0;

	Textures : Array<IfcSurfaceTexture>;

}

export class IfcSurfaceStyleWithTexturesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleWithTextures';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Textures',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSurfaceTexture>'
		}
    ];
}
