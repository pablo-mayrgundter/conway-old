
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCableCarrierFittingTypeEnum from "./IfcCableCarrierFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarrierfittingtype.htm
 */
export default class IfcCableCarrierFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableCarrierFittingType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcCableCarrierFittingTypeEnum  ) {}
}

export class IfcCableCarrierFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierFittingType';

    public readonly required: string[] = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierFittingTypeEnum'
		}
    ];
}
