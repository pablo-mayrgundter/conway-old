
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceoflinearextrusion.htm
 */
export default class IfcSurfaceOfLinearExtrusion implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSurfaceOfLinearExtrusion';

    public readonly __version__: number = 0;

    constructor( public readonly ExtrudedDirection : IfcDirection , public readonly Depth : IfcLengthMeasure  ) {}
}

export class IfcSurfaceOfLinearExtrusionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceOfLinearExtrusion';

    public readonly required: string[] = [ 'IfcSweptSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ExtrudedDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'Depth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
