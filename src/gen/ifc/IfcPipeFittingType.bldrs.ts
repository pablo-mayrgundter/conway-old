
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPipeFittingTypeEnum} from "./IfcPipeFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpipefittingtype.htm
 */
export default class IfcPipeFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPipeFittingType';

    public readonly __version__: number = 0;

	PredefinedType : IfcPipeFittingTypeEnum;

}

export class IfcPipeFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPipeFittingType';

    public readonly required: string[] = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPipeFittingTypeEnum'
		}
    ];
}
