
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcIdentifier} from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm
 */
export default class IfcExternalReference implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcExternalReference';

    public readonly __version__: number = 0;

	Location? : IfcLabel;
	ItemReference? : IfcIdentifier;
	Name? : IfcLabel;

}

export class IfcExternalReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExternalReference';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Location',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ItemReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
