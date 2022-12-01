
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcControllerTypeEnum} from "./IfcControllerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrollertype.htm
 */
export default class IfcControllerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcControllerType';

    public readonly __version__: number = 0;

	PredefinedType : IfcControllerTypeEnum;

}

export class IfcControllerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcControllerType';

    public readonly required: string[] = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcControllerTypeEnum'
		}
    ];
}
