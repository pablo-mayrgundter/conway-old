
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCurve} from "./IfcCurve.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve2d.htm
 */
export default class IfcOffsetCurve2D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOffsetCurve2D';

    public readonly __version__: number = 0;

	BasisCurve : IfcCurve;
	Distance : IfcLengthMeasure;
	SelfIntersect : boolean;

}

export class IfcOffsetCurve2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOffsetCurve2D';

    public readonly required: string[] = [ 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'BasisCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'Distance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}
