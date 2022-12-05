
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
 */
export default class IfcArbitraryOpenProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcArbitraryOpenProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly Curve : IfcBoundedCurve  ) {}
}

export class IfcArbitraryOpenProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryOpenProfileDef';

    public readonly required: string[] = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Curve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve'
		}
    ];
}
