
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
 */
export default class IfcArbitraryOpenProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcArbitraryOpenProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcArbitraryOpenProfileDefSpecification = IfcArbitraryOpenProfileDefSpecification.instance;

    constructor( public readonly Curve : IfcBoundedCurve  ) {}
}

export class IfcArbitraryOpenProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryOpenProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Curve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryOpenProfileDefSpecification = new IfcArbitraryOpenProfileDefSpecification();
}
