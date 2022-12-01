
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"
import {IfcShapeAspect} from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
 */
export default class IfcWindowLiningProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWindowLiningProperties';

    public readonly __version__: number = 0;

	LiningDepth? : IfcPositiveLengthMeasure;
	LiningThickness? : IfcPositiveLengthMeasure;
	TransomThickness? : IfcPositiveLengthMeasure;
	MullionThickness? : IfcPositiveLengthMeasure;
	FirstTransomOffset? : IfcNormalisedRatioMeasure;
	SecondTransomOffset? : IfcNormalisedRatioMeasure;
	FirstMullionOffset? : IfcNormalisedRatioMeasure;
	SecondMullionOffset? : IfcNormalisedRatioMeasure;
	ShapeAspectStyle? : IfcShapeAspect;

}

export class IfcWindowLiningPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowLiningProperties';

    public readonly required: string[] = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LiningDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'LiningThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TransomThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MullionThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'FirstTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SecondTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'FirstMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SecondMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];
}
