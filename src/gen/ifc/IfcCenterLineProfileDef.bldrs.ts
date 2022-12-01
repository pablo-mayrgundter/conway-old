
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccenterlineprofiledef.htm
 */
export default class IfcCenterLineProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCenterLineProfileDef';

    public readonly __version__: number = 0;

	Thickness : IfcPositiveLengthMeasure;

}

export class IfcCenterLineProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCenterLineProfileDef';

    public readonly required: string[] = [ 'IfcArbitraryOpenProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
