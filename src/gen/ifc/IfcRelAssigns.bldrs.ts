
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcObjectDefinition} from "./IfcObjectDefinition.bldrs"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassigns.htm
 */
export default class IfcRelAssigns implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssigns';

    public readonly __version__: number = 0;

	RelatedObjects : Array<IfcObjectDefinition>;
	RelatedObjectsType? : IfcObjectTypeEnum;

}

export class IfcRelAssignsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssigns';

    public readonly required: string[] = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObjectDefinition>'
		}, 
		{
			name: 'RelatedObjectsType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum'
		}
    ];
}
