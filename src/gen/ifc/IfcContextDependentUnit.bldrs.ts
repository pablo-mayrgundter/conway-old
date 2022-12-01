
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm
 */
export default class IfcContextDependentUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcContextDependentUnit';

    public readonly __version__: number = 0;

	Name : IfcLabel;

}

export class IfcContextDependentUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcContextDependentUnit';

    public readonly required: string[] = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

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
