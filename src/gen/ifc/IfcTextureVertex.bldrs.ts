
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm
 */
export default class IfcTextureVertex implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextureVertex';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTextureVertexSpecification = IfcTextureVertexSpecification.instance;

    constructor( public readonly Coordinates : Array<IfcParameterValue>  ) {}
}

export class IfcTextureVertexSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureVertex';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Coordinates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcParameterValue>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextureVertexSpecification = new IfcTextureVertexSpecification();
}
