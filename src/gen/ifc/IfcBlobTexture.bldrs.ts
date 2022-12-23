
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblobtexture.htm
 */
export default class IfcBlobTexture implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBlobTexture';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBlobTextureSpecification = IfcBlobTextureSpecification.instance;

    constructor( public readonly RasterFormat : IfcIdentifier , public readonly RasterCode : boolean  ) {}
}

export class IfcBlobTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBlobTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RasterFormat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'RasterCode',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBlobTextureSpecification = new IfcBlobTextureSpecification();
}
