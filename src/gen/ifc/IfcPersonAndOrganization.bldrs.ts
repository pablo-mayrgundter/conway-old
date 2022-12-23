
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
 */
export default class IfcPersonAndOrganization implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPersonAndOrganization';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPersonAndOrganizationSpecification = IfcPersonAndOrganizationSpecification.instance;

    constructor( public readonly ThePerson : IfcPerson , public readonly TheOrganization : IfcOrganization , public readonly Roles : Array<IfcActorRole>  | undefined ) {}
}

export class IfcPersonAndOrganizationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPersonAndOrganization';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPersonAndOrganizationSpecification = new IfcPersonAndOrganizationSpecification();
}
