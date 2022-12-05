
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcControl from "./IfcControl.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstocontrol.htm
 */
export default class IfcRelAssignsToControl implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToControl';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingControl : IfcControl  ) {}
}

export class IfcRelAssignsToControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToControl';

    public readonly required: string[] = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingControl',
			isCollection: false,
			rank: 0,
			baseType: 'IfcControl'
		}
    ];
}
