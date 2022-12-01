
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircleprofiledef.htm
 */
export default class IfcCircleProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCircleProfileDef';

    public readonly __version__: number = 0;

	Radius : IfcPositiveLengthMeasure;

}

export class IfcCircleProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCircleProfileDef';

    public readonly required: string[] = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
