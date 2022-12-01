
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm
 */
export default class IfcSlippageConnectionCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSlippageConnectionCondition';

    public readonly __version__: number = 0;

	SlippageX? : IfcLengthMeasure;
	SlippageY? : IfcLengthMeasure;
	SlippageZ? : IfcLengthMeasure;

}

export class IfcSlippageConnectionConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlippageConnectionCondition';

    public readonly required: string[] = [ 'IfcStructuralConnectionCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SlippageX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SlippageY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SlippageZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
