
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAxis1Placement} from "./IfcAxis1Placement.bldrs"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.bldrs"
import {IfcLine} from "./IfcLine.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolid.htm
 */
export default class IfcRevolvedAreaSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRevolvedAreaSolid';

    public readonly __version__: number = 0;

	Axis : IfcAxis1Placement;
	Angle : IfcPlaneAngleMeasure;

}

export class IfcRevolvedAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRevolvedAreaSolid';

    public readonly required: string[] = [ 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Axis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis1Placement'
		}, 
		{
			name: 'Angle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}
    ];
}
