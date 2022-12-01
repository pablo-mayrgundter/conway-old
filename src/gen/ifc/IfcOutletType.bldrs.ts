
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcOutletTypeEnum} from "./IfcOutletTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoutlettype.htm
 */
export default class IfcOutletType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOutletType';

    public readonly __version__: number = 0;

	PredefinedType : IfcOutletTypeEnum;

}

export class IfcOutletTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOutletType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOutletTypeEnum'
		}
    ];
}
