
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperformancehistory.htm
 */
export default class IfcPerformanceHistory implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPerformanceHistory';

    public readonly __version__: number = 0;

	LifeCyclePhase : IfcLabel;

}

export class IfcPerformanceHistorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPerformanceHistory';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LifeCyclePhase',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
