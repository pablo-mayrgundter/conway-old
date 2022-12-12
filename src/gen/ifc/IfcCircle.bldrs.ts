
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircle.htm
 */
export default class IfcCircle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCircle';

    public readonly __version__: number = 0;

    constructor( public readonly Radius : IfcPositiveLengthMeasure  ) {}
}

export class IfcCircleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCircle';

    public readonly required: string[] = [ 'IfcConic', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}