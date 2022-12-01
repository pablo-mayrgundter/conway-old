
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCoveringTypeEnum} from "./IfcCoveringTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoveringtype.htm
 */
export default class IfcCoveringType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCoveringType';

    public readonly __version__: number = 0;

	PredefinedType : IfcCoveringTypeEnum;

}

export class IfcCoveringTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCoveringType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoveringTypeEnum'
		}
    ];
}
