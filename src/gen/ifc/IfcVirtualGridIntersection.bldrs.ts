
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcGridAxis} from "./IfcGridAxis.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
 */
export default class IfcVirtualGridIntersection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVirtualGridIntersection';

    public readonly __version__: number = 0;

	IntersectingAxes : Array<IfcGridAxis>;
	OffsetDistances : Array<IfcLengthMeasure>;

}

export class IfcVirtualGridIntersectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVirtualGridIntersection';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'IntersectingAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>'
		}, 
		{
			name: 'OffsetDistances',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLengthMeasure>'
		}
    ];
}
