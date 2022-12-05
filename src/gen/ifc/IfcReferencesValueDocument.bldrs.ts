
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreferencesvaluedocument.htm
 */
export default class IfcReferencesValueDocument implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReferencesValueDocument';

    public readonly __version__: number = 0;

    constructor( public readonly ReferencedDocument : IfcDocumentReference|IfcDocumentInformation , public readonly ReferencingValues : Array<IfcAppliedValue> , public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined ) {}
}

export class IfcReferencesValueDocumentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReferencesValueDocument';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ReferencedDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentReference|IfcDocumentInformation'
		}, 
		{
			name: 'ReferencingValues',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAppliedValue>'
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
		}
    ];
}
