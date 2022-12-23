
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPresentableText from "./IfcPresentableText.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcTextPath from "./IfcTextPath.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm
 */
export default class IfcTextLiteral implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextLiteral';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTextLiteralSpecification = IfcTextLiteralSpecification.instance;

    constructor( public readonly Literal : IfcPresentableText , public readonly Placement : IfcAxis2Placement2D|IfcAxis2Placement3D , public readonly Path : IfcTextPath  ) {}
}

export class IfcTextLiteralSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextLiteral';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Literal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPresentableText'
		}, 
		{
			name: 'Placement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}, 
		{
			name: 'Path',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextPath'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextLiteralSpecification = new IfcTextLiteralSpecification();
}
