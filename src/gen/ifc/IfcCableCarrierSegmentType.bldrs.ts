
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCableCarrierSegmentTypeEnum from "./IfcCableCarrierSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarriersegmenttype.htm
 */
export default class IfcCableCarrierSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableCarrierSegmentType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcCableCarrierSegmentTypeEnum  ) {}
}

export class IfcCableCarrierSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierSegmentType';

    public readonly required: string[] = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierSegmentTypeEnum'
		}
    ];
}
