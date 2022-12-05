
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcBoilerTypeEnum from "./IfcBoilerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboilertype.htm
 */
export default class IfcBoilerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoilerType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcBoilerTypeEnum  ) {}
}

export class IfcBoilerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoilerType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoilerTypeEnum'
		}
    ];
}
