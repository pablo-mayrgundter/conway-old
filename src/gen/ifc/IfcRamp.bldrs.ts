
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRampTypeEnum} from "./IfcRampTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcramp.htm
 */
export default class IfcRamp implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRamp';

    public readonly __version__: number = 0;

	ShapeType : IfcRampTypeEnum;

}

export class IfcRampSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRamp';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ShapeType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRampTypeEnum'
		}
    ];
}
