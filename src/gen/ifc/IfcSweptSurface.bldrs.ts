
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptsurface.htm
 */
export default class IfcSweptSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSweptSurface';

    public readonly __version__: number = 0;

    constructor( public readonly SweptCurve : IfcProfileDef , public readonly Position : IfcAxis2Placement3D  ) {}
}

export class IfcSweptSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptSurface';

    public readonly required: string[] = [ 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SweptCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}, 
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}
    ];
}
