
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm
 */
export default class IfcPerson implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPerson';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPersonSpecification = IfcPersonSpecification.instance;

    constructor( public readonly Id : IfcIdentifier  | undefined, public readonly FamilyName : IfcLabel  | undefined, public readonly GivenName : IfcLabel  | undefined, public readonly MiddleNames : Array<IfcLabel>  | undefined, public readonly PrefixTitles : Array<IfcLabel>  | undefined, public readonly SuffixTitles : Array<IfcLabel>  | undefined, public readonly Roles : Array<IfcActorRole>  | undefined, public readonly Addresses : Array<IfcAddress>  | undefined ) {}
}

export class IfcPersonSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPerson';

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
			name: 'FamilyName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'GivenName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'MiddleNames',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'PrefixTitles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'SuffixTitles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
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

    public static readonly instance: IfcPersonSpecification = new IfcPersonSpecification();
}
