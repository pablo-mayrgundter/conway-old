
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement2d.htm
 */
export default class IfcAxis2Placement2D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAxis2Placement2D';

    public readonly __version__: number = 0;

    constructor( public readonly RefDirection : IfcDirection  | undefined ) {}
}

export class IfcAxis2Placement2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAxis2Placement2D';

    public readonly required: string[] = [ 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];
}
