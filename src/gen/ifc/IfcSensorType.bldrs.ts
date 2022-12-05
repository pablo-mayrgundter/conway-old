
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSensorTypeEnum from "./IfcSensorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsensortype.htm
 */
export default class IfcSensorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSensorType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcSensorTypeEnum  ) {}
}

export class IfcSensorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSensorType';

    public readonly required: string[] = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSensorTypeEnum'
		}
    ];
}
