
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcActuatorTypeEnum} from "./IfcActuatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactuatortype.htm
 */
export default class IfcActuatorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActuatorType';

    public readonly __version__: number = 0;

	PredefinedType : IfcActuatorTypeEnum;

}

export class IfcActuatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActuatorType';

    public readonly required: string[] = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActuatorTypeEnum'
		}
    ];
}
