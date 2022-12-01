
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcIdentifier} from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapplication.htm
 */
export default class IfcApplication implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcApplication';

    public readonly __version__: number = 0;

	ApplicationDeveloper : IfcOrganization;
	Version : IfcLabel;
	ApplicationFullName : IfcLabel;
	ApplicationIdentifier : IfcIdentifier;

}

export class IfcApplicationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApplication';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ApplicationDeveloper',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization'
		}, 
		{
			name: 'Version',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ApplicationFullName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ApplicationIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];
}
