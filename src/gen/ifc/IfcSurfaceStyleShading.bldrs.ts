
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleshading.htm
 */
export default class IfcSurfaceStyleShading implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceStyleShading';

    public readonly __version__: number = 0;

    constructor( public readonly SurfaceColour : IfcColourRgb  ) {}
}

export class IfcSurfaceStyleShadingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleShading';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SurfaceColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb'
		}
    ];
}
