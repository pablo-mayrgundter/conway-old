
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralMember from "./IfcStructuralMember.bldrs"
import IfcStructuralConnection from "./IfcStructuralConnection.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcStructuralConnectionCondition from "./IfcStructuralConnectionCondition.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralmember.htm
 */
export default class IfcRelConnectsStructuralMember implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsStructuralMember';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelConnectsStructuralMemberSpecification = IfcRelConnectsStructuralMemberSpecification.instance;

    constructor( public readonly RelatingStructuralMember : IfcStructuralMember , public readonly RelatedStructuralConnection : IfcStructuralConnection , public readonly AppliedCondition : IfcBoundaryCondition  | undefined, public readonly AdditionalConditions : IfcStructuralConnectionCondition  | undefined, public readonly SupportedLength : IfcLengthMeasure  | undefined, public readonly ConditionCoordinateSystem : IfcAxis2Placement3D  | undefined ) {}
}

export class IfcRelConnectsStructuralMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingStructuralMember',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralMember'
		}, 
		{
			name: 'RelatedStructuralConnection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralConnection'
		}, 
		{
			name: 'AppliedCondition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundaryCondition'
		}, 
		{
			name: 'AdditionalConditions',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralConnectionCondition'
		}, 
		{
			name: 'SupportedLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ConditionCoordinateSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsStructuralMemberSpecification = new IfcRelConnectsStructuralMemberSpecification();
}
