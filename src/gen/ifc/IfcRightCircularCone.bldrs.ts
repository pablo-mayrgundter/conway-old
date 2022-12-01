
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcone.htm
 */
export default class IfcRightCircularCone implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRightCircularCone';

    public readonly __version__: number = 0;

	Height : IfcPositiveLengthMeasure;
	BottomRadius : IfcPositiveLengthMeasure;

}

export class IfcRightCircularConeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRightCircularCone';

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
			name: 'BottomRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
