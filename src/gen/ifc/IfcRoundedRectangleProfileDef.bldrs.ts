
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundedrectangleprofiledef.htm
 */
export default class IfcRoundedRectangleProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoundedRectangleProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRoundedRectangleProfileDefSpecification = IfcRoundedRectangleProfileDefSpecification.instance;

    constructor( public readonly RoundingRadius : IfcPositiveLengthMeasure  ) {}
}

export class IfcRoundedRectangleProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoundedRectangleProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcRectangleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RoundingRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRoundedRectangleProfileDefSpecification = new IfcRoundedRectangleProfileDefSpecification();
}
