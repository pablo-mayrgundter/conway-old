
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindow.htm
 */
export default class IfcWindow implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWindow';

    public readonly __version__: number = 0;

    constructor( public readonly OverallHeight : IfcPositiveLengthMeasure  | undefined, public readonly OverallWidth : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcWindowSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindow';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OverallHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'OverallWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
