
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcGridAxis} from "./IfcGridAxis.bldrs"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgrid.htm
 */
export default class IfcGrid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGrid';

    public readonly __version__: number = 0;

	UAxes : Array<IfcGridAxis>;
	VAxes : Array<IfcGridAxis>;
	WAxes? : Array<IfcGridAxis>;

}

export class IfcGridSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGrid';

    public readonly required: string[] = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'UAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>'
		}, 
		{
			name: 'VAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>'
		}, 
		{
			name: 'WAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>'
		}
    ];
}
