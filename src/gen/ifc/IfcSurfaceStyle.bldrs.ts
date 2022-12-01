
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSurfaceSide} from "./IfcSurfaceSide.bldrs"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.bldrs"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting.bldrs"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.bldrs"
import {IfcExternallyDefinedSurfaceStyle} from "./IfcExternallyDefinedSurfaceStyle.bldrs"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm
 */
export default class IfcSurfaceStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyle';

    public readonly __version__: number = 0;

	Side : IfcSurfaceSide;
	Styles : Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>;

}

export class IfcSurfaceStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyle';

    public readonly required: string[] = [ 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Side',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurfaceSide'
		}, 
		{
			name: 'Styles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>'
		}
    ];
}
