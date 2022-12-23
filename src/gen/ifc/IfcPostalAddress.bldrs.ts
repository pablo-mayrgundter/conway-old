
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
 */
export default class IfcPostalAddress implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPostalAddress';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPostalAddressSpecification = IfcPostalAddressSpecification.instance;

    constructor( public readonly InternalLocation : IfcLabel  | undefined, public readonly AddressLines : Array<IfcLabel>  | undefined, public readonly PostalBox : IfcLabel  | undefined, public readonly Town : IfcLabel  | undefined, public readonly Region : IfcLabel  | undefined, public readonly PostalCode : IfcLabel  | undefined, public readonly Country : IfcLabel  | undefined ) {}
}

export class IfcPostalAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPostalAddress';

    public readonly required: ReadonlyArray< string > = [ 'IfcAddress' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InternalLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'AddressLines',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'PostalBox',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Town',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Region',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'PostalCode',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Country',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPostalAddressSpecification = new IfcPostalAddressSpecification();
}
