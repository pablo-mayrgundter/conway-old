
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcBoundedCurve} from "./IfcBoundedCurve.bldrs"
import {IfcEdgeCurve} from "./IfcEdgeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
 */
export default class IfcConnectionCurveGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionCurveGeometry';

    public readonly __version__: number = 0;

	CurveOnRelatingElement : IfcBoundedCurve|IfcEdgeCurve;
	CurveOnRelatedElement? : IfcBoundedCurve|IfcEdgeCurve;

}

export class IfcConnectionCurveGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionCurveGeometry';

    public readonly required: string[] = [ 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'CurveOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve'
		}, 
		{
			name: 'CurveOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve'
		}
    ];
}
