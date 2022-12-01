
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipseprofiledef.htm
 */
export default class IfcEllipseProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEllipseProfileDef';

    public readonly __version__: number = 0;

	SemiAxis1 : IfcPositiveLengthMeasure;
	SemiAxis2 : IfcPositiveLengthMeasure;

}

export class IfcEllipseProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEllipseProfileDef';

    public readonly required: string[] = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SemiAxis1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'SemiAxis2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
