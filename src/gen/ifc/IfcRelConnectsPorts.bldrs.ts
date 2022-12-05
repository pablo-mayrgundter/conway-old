
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm
 */
export default class IfcRelConnectsPorts implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsPorts';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingPort : IfcPort , public readonly RelatedPort : IfcPort , public readonly RealizingElement : IfcElement  | undefined ) {}
}

export class IfcRelConnectsPortsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPorts';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPort'
		}, 
		{
			name: 'RelatedPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPort'
		}, 
		{
			name: 'RealizingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}
    ];
}
