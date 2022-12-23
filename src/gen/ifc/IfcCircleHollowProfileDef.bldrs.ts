
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccirclehollowprofiledef.htm
 */
export default class IfcCircleHollowProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCircleHollowProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCircleHollowProfileDefSpecification = IfcCircleHollowProfileDefSpecification.instance;

    constructor( public readonly WallThickness : IfcPositiveLengthMeasure  ) {}
}

export class IfcCircleHollowProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCircleHollowProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcCircleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'WallThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCircleHollowProfileDefSpecification = new IfcCircleHollowProfileDefSpecification();
}
