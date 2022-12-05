
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentation.htm
 */
export default class IfcRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRepresentation';

    public readonly __version__: number = 0;

    constructor( public readonly ContextOfItems : IfcRepresentationContext , public readonly RepresentationIdentifier : IfcLabel  | undefined, public readonly RepresentationType : IfcLabel  | undefined, public readonly Items : Array<IfcRepresentationItem>  ) {}
}

export class IfcRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentation';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ContextOfItems',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationContext'
		}, 
		{
			name: 'RepresentationIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'RepresentationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Items',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationItem>'
		}
    ];
}
