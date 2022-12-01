
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"
import {IfcShapeAspect} from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm
 */
export default class IfcDoorLiningProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDoorLiningProperties';

    public readonly __version__: number = 0;

	LiningDepth? : IfcPositiveLengthMeasure;
	LiningThickness? : IfcPositiveLengthMeasure;
	ThresholdDepth? : IfcPositiveLengthMeasure;
	ThresholdThickness? : IfcPositiveLengthMeasure;
	TransomThickness? : IfcPositiveLengthMeasure;
	TransomOffset? : IfcLengthMeasure;
	LiningOffset? : IfcLengthMeasure;
	ThresholdOffset? : IfcLengthMeasure;
	CasingThickness? : IfcPositiveLengthMeasure;
	CasingDepth? : IfcPositiveLengthMeasure;
	ShapeAspectStyle? : IfcShapeAspect;

}

export class IfcDoorLiningPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorLiningProperties';

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
			name: 'ThresholdDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'ThresholdThickness',
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
			name: 'TransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'LiningOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ThresholdOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'CasingThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CasingDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];
}
