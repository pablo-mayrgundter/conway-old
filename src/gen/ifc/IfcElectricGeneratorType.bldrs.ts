
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElectricGeneratorTypeEnum from "./IfcElectricGeneratorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricgeneratortype.htm
 */
export default class IfcElectricGeneratorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricGeneratorType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcElectricGeneratorTypeEnum  ) {}
}

export class IfcElectricGeneratorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricGeneratorType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricGeneratorTypeEnum'
		}
    ];
}
