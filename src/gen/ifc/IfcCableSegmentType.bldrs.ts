
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCableSegmentTypeEnum} from "./IfcCableSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablesegmenttype.htm
 */
export default class IfcCableSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCableSegmentType';

    public readonly __version__: number = 0;

	PredefinedType : IfcCableSegmentTypeEnum;

}

export class IfcCableSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableSegmentType';

    public readonly required: string[] = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableSegmentTypeEnum'
		}
    ];
}
