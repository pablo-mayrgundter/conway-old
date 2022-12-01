
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSpaceTypeEnum} from "./IfcSpaceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspacetype.htm
 */
export default class IfcSpaceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpaceType';

    public readonly __version__: number = 0;

	PredefinedType : IfcSpaceTypeEnum;

}

export class IfcSpaceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceType';

    public readonly required: string[] = [ 'IfcSpatialStructureElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceTypeEnum'
		}
    ];
}
