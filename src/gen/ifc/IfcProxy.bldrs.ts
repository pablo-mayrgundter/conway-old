
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproxy.htm
 */
export default class IfcProxy implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProxy';

    public readonly __version__: number = 0;

	ProxyType : IfcObjectTypeEnum;
	Tag? : IfcLabel;

}

export class IfcProxySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProxy';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ProxyType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum'
		}, 
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
