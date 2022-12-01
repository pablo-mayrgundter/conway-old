
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAlarmTypeEnum} from "./IfcAlarmTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcalarmtype.htm
 */
export default class IfcAlarmType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAlarmType';

    public readonly __version__: number = 0;

	PredefinedType : IfcAlarmTypeEnum;

}

export class IfcAlarmTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAlarmType';

    public readonly required: string[] = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAlarmTypeEnum'
		}
    ];
}
