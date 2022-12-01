
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAxis1Placement} from "./IfcAxis1Placement.bldrs"
import {IfcLine} from "./IfcLine.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm
 */
export default class IfcSurfaceOfRevolution implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceOfRevolution';

    public readonly __version__: number = 0;

	AxisPosition : IfcAxis1Placement;

}

export class IfcSurfaceOfRevolutionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceOfRevolution';

    public readonly required: string[] = [ 'IfcSweptSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AxisPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis1Placement'
		}
    ];
}
