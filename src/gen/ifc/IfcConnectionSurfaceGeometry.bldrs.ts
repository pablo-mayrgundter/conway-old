
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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

    public readonly __specification__: IfcConnectionSurfaceGeometrySpecification = IfcConnectionSurfaceGeometrySpecification.instance;

    constructor( public readonly SurfaceOnRelatingElement : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel , public readonly SurfaceOnRelatedElement : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel  | undefined ) {}
}

export class IfcConnectionSurfaceGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionSurfaceGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionSurfaceGeometrySpecification = new IfcConnectionSurfaceGeometrySpecification();
}
