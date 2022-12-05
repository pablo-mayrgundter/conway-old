
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm
 */
export default class IfcProductRepresentation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProductRepresentation';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined, public readonly Representations : Array<IfcRepresentation>  ) {}
}

export class IfcProductRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductRepresentation';

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
			name: 'Representations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentation>'
		}
    ];
}
