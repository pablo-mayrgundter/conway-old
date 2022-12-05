
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElectricTimeControlTypeEnum from "./IfcElectricTimeControlTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectrictimecontroltype.htm
 */
export default class IfcElectricTimeControlType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricTimeControlType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcElectricTimeControlTypeEnum  ) {}
}

export class IfcElectricTimeControlTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricTimeControlType';

    public readonly required: string[] = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricTimeControlTypeEnum'
		}
    ];
}
