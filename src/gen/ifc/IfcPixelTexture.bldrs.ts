
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcInteger from "./IfcInteger.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm
 */
export default class IfcPixelTexture implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPixelTexture';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPixelTextureSpecification = IfcPixelTextureSpecification.instance;

    constructor( public readonly Width : IfcInteger , public readonly Height : IfcInteger , public readonly ColourComponents : IfcInteger , public readonly Pixel : Array<Uint8Array>  ) {}
}

export class IfcPixelTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPixelTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Width',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger'
		}, 
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger'
		}, 
		{
			name: 'ColourComponents',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger'
		}, 
		{
			name: 'Pixel',
			isCollection: true,
			rank: 1,
			baseType: 'Array<Uint8Array>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPixelTextureSpecification = new IfcPixelTextureSpecification();
}
