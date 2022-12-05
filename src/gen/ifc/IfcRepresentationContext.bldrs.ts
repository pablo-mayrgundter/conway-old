
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationcontext.htm
 */
export default class IfcRepresentationContext implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRepresentationContext';

    public readonly __version__: number = 0;

    constructor( public readonly ContextIdentifier : IfcLabel  | undefined, public readonly ContextType : IfcLabel  | undefined ) {}
}

export class IfcRepresentationContextSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentationContext';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ContextIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ContextType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
