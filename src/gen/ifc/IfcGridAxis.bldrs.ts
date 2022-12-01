
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcCurve} from "./IfcCurve.bldrs"
import {IfcBoolean} from "./IfcBoolean.bldrs"
import {IfcGrid} from "./IfcGrid.bldrs"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm
 */
export default class IfcGridAxis implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGridAxis';

    public readonly __version__: number = 0;

	AxisTag? : IfcLabel;
	AxisCurve : IfcCurve;
	SameSense : IfcBoolean;

}

export class IfcGridAxisSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGridAxis';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AxisTag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'AxisCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoolean'
		}
    ];
}
