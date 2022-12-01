
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.bldrs"
import {IfcOwnerHistory} from "./IfcOwnerHistory.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
 */
export default class IfcRoot implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoot';

    public readonly __version__: number = 0;

	GlobalId : IfcGloballyUniqueId;
	OwnerHistory : IfcOwnerHistory;
	Name? : IfcLabel;
	Description? : IfcText;

}

export class IfcRootSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoot';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'GlobalId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGloballyUniqueId'
		}, 
		{
			name: 'OwnerHistory',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOwnerHistory'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
