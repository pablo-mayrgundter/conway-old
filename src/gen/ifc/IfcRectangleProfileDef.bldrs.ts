
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangleprofiledef.htm
 */
export default class IfcRectangleProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRectangleProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRectangleProfileDefSpecification = IfcRectangleProfileDefSpecification.instance;

    constructor( public readonly XDim : IfcPositiveLengthMeasure , public readonly YDim : IfcPositiveLengthMeasure  ) {}
}

export class IfcRectangleProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangleProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'XDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'YDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRectangleProfileDefSpecification = new IfcRectangleProfileDefSpecification();
}
