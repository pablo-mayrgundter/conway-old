
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPipeSegmentTypeEnum} from "./IfcPipeSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpipesegmenttype.htm
 */
export default class IfcPipeSegmentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPipeSegmentType';

    public readonly __version__: number = 0;

	PredefinedType : IfcPipeSegmentTypeEnum;

}

export class IfcPipeSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPipeSegmentType';

    public readonly required: string[] = [ 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPipeSegmentTypeEnum'
		}
    ];
}
