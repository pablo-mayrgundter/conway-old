
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarbox.htm
 */
export default class IfcPlanarBox implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPlanarBox';

    public readonly __version__: number = 0;

    constructor( public readonly Placement : IfcAxis2Placement2D|IfcAxis2Placement3D  ) {}
}

export class IfcPlanarBoxSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPlanarBox';

    public readonly required: string[] = [ 'IfcPlanarExtent', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Placement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}
    ];
}
