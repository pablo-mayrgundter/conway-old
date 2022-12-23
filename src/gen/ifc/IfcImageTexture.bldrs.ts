
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm
 */
export default class IfcImageTexture implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcImageTexture';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcImageTextureSpecification = IfcImageTextureSpecification.instance;

    constructor( public readonly UrlReference : IfcIdentifier  ) {}
}

export class IfcImageTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcImageTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UrlReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcImageTextureSpecification = new IfcImageTextureSpecification();
}
