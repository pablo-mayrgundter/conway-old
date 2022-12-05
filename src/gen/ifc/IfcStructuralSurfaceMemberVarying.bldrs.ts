
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemembervarying.htm
 */
export default class IfcStructuralSurfaceMemberVarying implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralSurfaceMemberVarying';

    public readonly __version__: number = 0;

    constructor( public readonly SubsequentThickness : Array<IfcPositiveLengthMeasure> , public readonly VaryingThicknessLocation : IfcShapeAspect  ) {}
}

export class IfcStructuralSurfaceMemberVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSurfaceMemberVarying';

    public readonly required: string[] = [ 'IfcStructuralSurfaceMember', 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SubsequentThickness',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPositiveLengthMeasure>'
		}, 
		{
			name: 'VaryingThicknessLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];
}
