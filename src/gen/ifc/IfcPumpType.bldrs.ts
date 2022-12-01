
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPumpTypeEnum} from "./IfcPumpTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpumptype.htm
 */
export default class IfcPumpType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPumpType';

    public readonly __version__: number = 0;

	PredefinedType : IfcPumpTypeEnum;

}

export class IfcPumpTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPumpType';

    public readonly required: string[] = [ 'IfcFlowMovingDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPumpTypeEnum'
		}
    ];
}
