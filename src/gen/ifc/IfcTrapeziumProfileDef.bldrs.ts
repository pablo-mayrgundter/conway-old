
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrapeziumprofiledef.htm
 */
export default class IfcTrapeziumProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTrapeziumProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTrapeziumProfileDefSpecification = IfcTrapeziumProfileDefSpecification.instance;

    constructor( public readonly BottomXDim : IfcPositiveLengthMeasure , public readonly TopXDim : IfcPositiveLengthMeasure , public readonly YDim : IfcPositiveLengthMeasure , public readonly TopXOffset : IfcLengthMeasure  ) {}
}

export class IfcTrapeziumProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTrapeziumProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BottomXDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TopXDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'YDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TopXOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTrapeziumProfileDefSpecification = new IfcTrapeziumProfileDefSpecification();
}
