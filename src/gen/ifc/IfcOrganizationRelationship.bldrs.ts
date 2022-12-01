
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganizationrelationship.htm
 */
export default class IfcOrganizationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOrganizationRelationship';

    public readonly __version__: number = 0;

	Name : IfcLabel;
	Description? : IfcText;
	RelatingOrganization : IfcOrganization;
	RelatedOrganizations : Array<IfcOrganization>;

}

export class IfcOrganizationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrganizationRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
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
		}, 
		{
			name: 'RelatingOrganization',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization'
		}, 
		{
			name: 'RelatedOrganizations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization>'
		}
    ];
}
