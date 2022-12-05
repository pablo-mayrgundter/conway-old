
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDamperTypeEnum from "./IfcDamperTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdampertype.htm
 */
export default class IfcDamperType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDamperType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcDamperTypeEnum  ) {}
}

export class IfcDamperTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDamperType';

    public readonly required: string[] = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDamperTypeEnum'
		}
    ];
}
