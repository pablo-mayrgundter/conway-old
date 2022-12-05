
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm
 */
export default class IfcTask implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTask';

    public readonly __version__: number = 0;

    constructor( public readonly TaskId : IfcIdentifier , public readonly Status : IfcLabel  | undefined, public readonly WorkMethod : IfcLabel  | undefined, public readonly IsMilestone : boolean , public readonly Priority : number  | undefined ) {}
}

export class IfcTaskSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTask';

    public readonly required: string[] = [ 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TaskId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'WorkMethod',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'IsMilestone',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Priority',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}
    ];
}
