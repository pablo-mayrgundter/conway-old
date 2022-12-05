
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcHumidifierTypeEnum from "./IfcHumidifierTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchumidifiertype.htm
 */
export default class IfcHumidifierType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcHumidifierType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcHumidifierTypeEnum  ) {}
}

export class IfcHumidifierTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHumidifierType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHumidifierTypeEnum'
		}
    ];
}
