
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcylinder.htm
 */
export default class IfcRightCircularCylinder implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRightCircularCylinder';

    public readonly __version__: number = 0;

	Height : IfcPositiveLengthMeasure;
	Radius : IfcPositiveLengthMeasure;

}

export class IfcRightCircularCylinderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRightCircularCylinder';

    public readonly required: string[] = [ 'IfcCsgPrimitive3D', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
