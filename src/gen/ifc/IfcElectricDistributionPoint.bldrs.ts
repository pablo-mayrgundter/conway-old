
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElectricDistributionPointFunctionEnum from "./IfcElectricDistributionPointFunctionEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricdistributionpoint.htm
 */
export default class IfcElectricDistributionPoint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricDistributionPoint';

    public readonly __version__: number = 0;

    constructor( public readonly DistributionPointFunction : IfcElectricDistributionPointFunctionEnum , public readonly UserDefinedFunction : IfcLabel  | undefined ) {}
}

export class IfcElectricDistributionPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricDistributionPoint';

    public readonly required: string[] = [ 'IfcFlowController', 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DistributionPointFunction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricDistributionPointFunctionEnum'
		}, 
		{
			name: 'UserDefinedFunction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
