
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm
 */
export default class IfcArbitraryClosedProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcArbitraryClosedProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcArbitraryClosedProfileDefSpecification = IfcArbitraryClosedProfileDefSpecification.instance;

    constructor( public readonly OuterCurve : IfcCurve  ) {}
}

export class IfcArbitraryClosedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryClosedProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OuterCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryClosedProfileDefSpecification = new IfcArbitraryClosedProfileDefSpecification();
}
