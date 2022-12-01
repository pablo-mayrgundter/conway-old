
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcForceMeasure} from "./IfcForceMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfailureconnectioncondition.htm
 */
export default class IfcFailureConnectionCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFailureConnectionCondition';

    public readonly __version__: number = 0;

	TensionFailureX? : IfcForceMeasure;
	TensionFailureY? : IfcForceMeasure;
	TensionFailureZ? : IfcForceMeasure;
	CompressionFailureX? : IfcForceMeasure;
	CompressionFailureY? : IfcForceMeasure;
	CompressionFailureZ? : IfcForceMeasure;

}

export class IfcFailureConnectionConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFailureConnectionCondition';

    public readonly required: string[] = [ 'IfcStructuralConnectionCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TensionFailureX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'TensionFailureY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'TensionFailureZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'CompressionFailureX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'CompressionFailureY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'CompressionFailureZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}
    ];
}
