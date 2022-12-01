
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.bldrs"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm
 */
export default class IfcConic implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConic';

    public readonly __version__: number = 0;

	Position : IfcAxis2Placement2D|IfcAxis2Placement3D;

}

export class IfcConicSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConic';

    public readonly required: string[] = [ 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}
    ];
}
