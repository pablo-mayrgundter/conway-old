
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm
 */
export default class IfcPresentationLayerAssignment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPresentationLayerAssignment';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined, public readonly AssignedItems : Array<IfcRepresentationItem|IfcRepresentation> , public readonly Identifier : IfcIdentifier  | undefined ) {}
}

export class IfcPresentationLayerAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationLayerAssignment';

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
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'AssignedItems',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationItem|IfcRepresentation>'
		}, 
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];
}
