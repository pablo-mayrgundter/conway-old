
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDuctFittingTypeEnum} from "./IfcDuctFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductfittingtype.htm
 */
export default class IfcDuctFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDuctFittingType';

    public readonly __version__: number = 0;

	PredefinedType : IfcDuctFittingTypeEnum;

}

export class IfcDuctFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctFittingType';

    public readonly required: string[] = [ 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctFittingTypeEnum'
		}
    ];
}
