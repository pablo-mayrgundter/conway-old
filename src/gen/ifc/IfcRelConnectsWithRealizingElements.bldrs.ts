
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswithrealizingelements.htm
 */
export default class IfcRelConnectsWithRealizingElements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsWithRealizingElements';

    public readonly __version__: number = 0;

    constructor( public readonly RealizingElements : Array<IfcElement> , public readonly ConnectionType : IfcLabel  | undefined ) {}
}

export class IfcRelConnectsWithRealizingElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsWithRealizingElements';

    public readonly required: string[] = [ 'IfcRelConnectsElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RealizingElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcElement>'
		}, 
		{
			name: 'ConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}