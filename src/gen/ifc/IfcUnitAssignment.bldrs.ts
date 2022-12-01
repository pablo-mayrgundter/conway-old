
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDerivedUnit} from "./IfcDerivedUnit.bldrs"
import {IfcNamedUnit} from "./IfcNamedUnit.bldrs"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
 */
export default class IfcUnitAssignment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcUnitAssignment';

    public readonly __version__: number = 0;

	Units : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>;

}

export class IfcUnitAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcUnitAssignment';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Units',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>'
		}
    ];
}
