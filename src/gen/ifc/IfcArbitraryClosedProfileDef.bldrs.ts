
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCurve} from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm
 */
export default class IfcArbitraryClosedProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcArbitraryClosedProfileDef';

    public readonly __version__: number = 0;

	OuterCurve : IfcCurve;

}

export class IfcArbitraryClosedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryClosedProfileDef';

    public readonly required: string[] = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OuterCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}
    ];
}
