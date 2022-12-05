
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcFaceSurface from "./IfcFaceSurface.bldrs"
import IfcFaceBasedSurfaceModel from "./IfcFaceBasedSurfaceModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm
 */
export default class IfcConnectionSurfaceGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionSurfaceGeometry';

    public readonly __version__: number = 0;

    constructor( public readonly SurfaceOnRelatingElement : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel , public readonly SurfaceOnRelatedElement : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel  | undefined ) {}
}

export class IfcConnectionSurfaceGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionSurfaceGeometry';

    public readonly required: string[] = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SurfaceOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel'
		}, 
		{
			name: 'SurfaceOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel'
		}
    ];
}
