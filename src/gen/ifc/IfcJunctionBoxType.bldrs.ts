
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcJunctionBoxTypeEnum} from "./IfcJunctionBoxTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcjunctionboxtype.htm
 */
export default class IfcJunctionBoxType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcJunctionBoxType';

    public readonly __version__: number = 0;

	PredefinedType : IfcJunctionBoxTypeEnum;

}

export class IfcJunctionBoxTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcJunctionBoxType';

    public readonly required: string[] = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcJunctionBoxTypeEnum'
		}
    ];
}
