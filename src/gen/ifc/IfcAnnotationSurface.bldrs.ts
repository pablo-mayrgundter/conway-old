
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"
import IfcTextureCoordinate from "./IfcTextureCoordinate.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationsurface.htm
 */
export default class IfcAnnotationSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationSurface';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAnnotationSurfaceSpecification = IfcAnnotationSurfaceSpecification.instance;

    constructor( public readonly Item : IfcGeometricRepresentationItem , public readonly TextureCoordinates : IfcTextureCoordinate  | undefined ) {}
}

export class IfcAnnotationSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Item',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricRepresentationItem'
		}, 
		{
			name: 'TextureCoordinates',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextureCoordinate'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationSurfaceSpecification = new IfcAnnotationSurfaceSpecification();
}
