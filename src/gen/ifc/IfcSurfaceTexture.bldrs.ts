
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurfaceTextureEnum from "./IfcSurfaceTextureEnum.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacetexture.htm
 */
export default class IfcSurfaceTexture implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceTexture';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSurfaceTextureSpecification = IfcSurfaceTextureSpecification.instance;

    constructor( public readonly RepeatS : boolean , public readonly RepeatT : boolean , public readonly TextureType : IfcSurfaceTextureEnum , public readonly TextureTransform : IfcCartesianTransformationOperator2D  | undefined ) {}
}

export class IfcSurfaceTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceTexture';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepeatS',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'RepeatT',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'TextureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurfaceTextureEnum'
		}, 
		{
			name: 'TextureTransform',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceTextureSpecification = new IfcSurfaceTextureSpecification();
}
