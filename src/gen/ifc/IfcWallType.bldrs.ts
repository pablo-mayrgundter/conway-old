
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcWallTypeEnum} from "./IfcWallTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwalltype.htm
 */
export default class IfcWallType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWallType';

    public readonly __version__: number = 0;

	PredefinedType : IfcWallTypeEnum;

}

export class IfcWallTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWallType';

    public readonly required: string[] = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWallTypeEnum'
		}
    ];
}
