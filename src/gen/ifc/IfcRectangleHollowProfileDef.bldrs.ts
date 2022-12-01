
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm
 */
export default class IfcRectangleHollowProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRectangleHollowProfileDef';

    public readonly __version__: number = 0;

	WallThickness : IfcPositiveLengthMeasure;
	InnerFilletRadius? : IfcPositiveLengthMeasure;
	OuterFilletRadius? : IfcPositiveLengthMeasure;

}

export class IfcRectangleHollowProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangleHollowProfileDef';

    public readonly required: string[] = [ 'IfcRectangleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'WallThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'InnerFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'OuterFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
