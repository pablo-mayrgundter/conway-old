
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm
 */
export default class IfcTelecomAddress implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTelecomAddress';

    public readonly __version__: number = 0;

    constructor( public readonly TelephoneNumbers : Array<IfcLabel>  | undefined, public readonly FacsimileNumbers : Array<IfcLabel>  | undefined, public readonly PagerNumber : IfcLabel  | undefined, public readonly ElectronicMailAddresses : Array<IfcLabel>  | undefined, public readonly WWWHomePageURL : IfcLabel  | undefined ) {}
}

export class IfcTelecomAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTelecomAddress';

    public readonly required: string[] = [ 'IfcAddress' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TelephoneNumbers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'FacsimileNumbers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'PagerNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ElectronicMailAddresses',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>'
		}, 
		{
			name: 'WWWHomePageURL',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
