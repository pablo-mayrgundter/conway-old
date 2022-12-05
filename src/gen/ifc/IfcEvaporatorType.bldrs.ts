
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcEvaporatorTypeEnum from "./IfcEvaporatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevaporatortype.htm
 */
export default class IfcEvaporatorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEvaporatorType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcEvaporatorTypeEnum  ) {}
}

export class IfcEvaporatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEvaporatorType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEvaporatorTypeEnum'
		}
    ];
}
