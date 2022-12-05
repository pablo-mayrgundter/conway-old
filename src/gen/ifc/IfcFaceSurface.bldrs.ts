
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm
 */
export default class IfcFaceSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFaceSurface';

    public readonly __version__: number = 0;

    constructor( public readonly FaceSurface : IfcSurface , public readonly SameSense : boolean  ) {}
}

export class IfcFaceSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceSurface';

    public readonly required: string[] = [ 'IfcFace', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'FaceSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface'
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}
