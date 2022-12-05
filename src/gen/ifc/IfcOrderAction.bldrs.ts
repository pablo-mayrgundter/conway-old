
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorderaction.htm
 */
export default class IfcOrderAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOrderAction';

    public readonly __version__: number = 0;

    constructor( public readonly ActionID : IfcIdentifier  ) {}
}

export class IfcOrderActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrderAction';

    public readonly required: string[] = [ 'IfcTask', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ActionID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];
}
