
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPerson} from "./IfcPerson.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"
import {IfcActorRole} from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
 */
export default class IfcPersonAndOrganization implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPersonAndOrganization';

    public readonly __version__: number = 0;

	ThePerson : IfcPerson;
	TheOrganization : IfcOrganization;
	Roles? : Array<IfcActorRole>;

}

export class IfcPersonAndOrganizationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPersonAndOrganization';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ThePerson',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPerson'
		}, 
		{
			name: 'TheOrganization',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization'
		}, 
		{
			name: 'Roles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcActorRole>'
		}
    ];
}
