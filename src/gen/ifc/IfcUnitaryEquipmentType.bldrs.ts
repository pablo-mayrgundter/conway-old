
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcUnitaryEquipmentTypeEnum from "./IfcUnitaryEquipmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitaryequipmenttype.htm
 */
export default class IfcUnitaryEquipmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcUnitaryEquipmentType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcUnitaryEquipmentTypeEnum  ) {}
}

export class IfcUnitaryEquipmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcUnitaryEquipmentType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcUnitaryEquipmentTypeEnum'
		}
    ];
}
