
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcStructuralSurfaceTypeEnum from "./IfcStructuralSurfaceTypeEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemember.htm
 */
export default class IfcStructuralSurfaceMember implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralSurfaceMember';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcStructuralSurfaceTypeEnum , public readonly Thickness : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcStructuralSurfaceMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSurfaceMember';

    public readonly required: string[] = [ 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralSurfaceTypeEnum'
		}, 
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
