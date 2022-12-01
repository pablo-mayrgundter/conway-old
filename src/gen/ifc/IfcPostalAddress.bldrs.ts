
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
 */
export default class IfcPostalAddress implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPostalAddress';

    public readonly __version__: number = 0;

	InternalLocation? : IfcLabel;
	AddressLines? : Array<IfcLabel>;
	PostalBox? : IfcLabel;
	Town? : IfcLabel;
	Region? : IfcLabel;
	PostalCode? : IfcLabel;
	Country? : IfcLabel;

}

export class IfcPostalAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPostalAddress';

    public readonly required: string[] = [ 'IfcAddress' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
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
}
