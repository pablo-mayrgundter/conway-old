
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcVibrationIsolatorTypeEnum} from "./IfcVibrationIsolatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvibrationisolatortype.htm
 */
export default class IfcVibrationIsolatorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVibrationIsolatorType';

    public readonly __version__: number = 0;

	PredefinedType : IfcVibrationIsolatorTypeEnum;

}

export class IfcVibrationIsolatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVibrationIsolatorType';

    public readonly required: string[] = [ 'IfcDiscreteAccessoryType', 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVibrationIsolatorTypeEnum'
		}
    ];
}
