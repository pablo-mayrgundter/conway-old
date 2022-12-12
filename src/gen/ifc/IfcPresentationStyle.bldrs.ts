
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm
 */
export default class IfcPresentationStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPresentationStyle';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel  | undefined ) {}
}

export class IfcPresentationStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationStyle';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}