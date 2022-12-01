
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCoveringTypeEnum} from "./IfcCoveringTypeEnum.bldrs"
import {IfcRelCoversSpaces} from "./IfcRelCoversSpaces.bldrs"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccovering.htm
 */
export default class IfcCovering implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCovering';

    public readonly __version__: number = 0;

	PredefinedType? : IfcCoveringTypeEnum;

}

export class IfcCoveringSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCovering';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

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
