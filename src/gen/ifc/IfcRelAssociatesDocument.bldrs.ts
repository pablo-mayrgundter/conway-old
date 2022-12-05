
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesdocument.htm
 */
export default class IfcRelAssociatesDocument implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesDocument';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingDocument : IfcDocumentReference|IfcDocumentInformation  ) {}
}

export class IfcRelAssociatesDocumentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesDocument';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentReference|IfcDocumentInformation'
		}
    ];
}
