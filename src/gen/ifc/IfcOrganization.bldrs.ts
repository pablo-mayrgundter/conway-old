
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcOrganizationRelationship from "./IfcOrganizationRelationship.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm
 */
export default class IfcOrganization implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOrganization';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcOrganizationSpecification = IfcOrganizationSpecification.instance;

    constructor( public readonly Id : IfcIdentifier  | undefined, public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined, public readonly Roles : Array<IfcActorRole>  | undefined, public readonly Addresses : Array<IfcAddress>  | undefined ) {}
}

export class IfcOrganizationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrganization';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Id',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
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
		}, 
		{
			name: 'Roles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcActorRole>'
		}, 
		{
			name: 'Addresses',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAddress>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOrganizationSpecification = new IfcOrganizationSpecification();
}
