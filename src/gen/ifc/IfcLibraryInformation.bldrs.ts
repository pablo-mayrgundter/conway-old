
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLibraryReference} from "./IfcLibraryReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm
 */
export default class IfcLibraryInformation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLibraryInformation';

    public readonly __version__: number = 0;

	Name : IfcLabel;
	Version? : IfcLabel;
	Publisher? : IfcOrganization;
	VersionDate? : IfcCalendarDate;
	LibraryReference? : Array<IfcLibraryReference>;

}

export class IfcLibraryInformationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLibraryInformation';

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
			name: 'Version',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Publisher',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization'
		}, 
		{
			name: 'VersionDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'LibraryReference',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLibraryReference>'
		}
    ];
}
