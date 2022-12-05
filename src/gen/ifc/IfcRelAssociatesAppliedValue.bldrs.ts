
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesappliedvalue.htm
 */
export default class IfcRelAssociatesAppliedValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesAppliedValue';

    public readonly __version__: number = 0;

    constructor( public readonly RelatingAppliedValue : IfcAppliedValue  ) {}
}

export class IfcRelAssociatesAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesAppliedValue';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingAppliedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAppliedValue'
		}
    ];
}
