
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCartesianPoint} from "./IfcCartesianPoint.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm
 */
export default class IfcBoundingBox implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundingBox';

    public readonly __version__: number = 0;

	Corner : IfcCartesianPoint;
	XDim : IfcPositiveLengthMeasure;
	YDim : IfcPositiveLengthMeasure;
	ZDim : IfcPositiveLengthMeasure;

}

export class IfcBoundingBoxSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundingBox';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Corner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'XDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'YDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'ZDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
