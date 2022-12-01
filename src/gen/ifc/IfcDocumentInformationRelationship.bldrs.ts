
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDocumentInformation} from "./IfcDocumentInformation.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformationrelationship.htm
 */
export default class IfcDocumentInformationRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDocumentInformationRelationship';

    public readonly __version__: number = 0;

	RelatingDocument : IfcDocumentInformation;
	RelatedDocuments : Array<IfcDocumentInformation>;
	RelationshipType? : IfcLabel;

}

export class IfcDocumentInformationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentInformationRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentInformation'
		}, 
		{
			name: 'RelatedDocuments',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentInformation>'
		}, 
		{
			name: 'RelationshipType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
