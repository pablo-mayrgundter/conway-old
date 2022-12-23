
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCurveStyleFontPattern from "./IfcCurveStyleFontPattern.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefont.htm
 */
export default class IfcCurveStyleFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurveStyleFont';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCurveStyleFontSpecification = IfcCurveStyleFontSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly PatternList : Array<IfcCurveStyleFontPattern>  ) {}
}

export class IfcCurveStyleFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFont';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'PatternList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurveStyleFontPattern>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontSpecification = new IfcCurveStyleFontSpecification();
}
