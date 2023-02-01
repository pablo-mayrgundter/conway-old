
import Component from "../../core/component"
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
export default  class IfcRelConnectsStructuralMember extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsStructuralMemberSpecification = IfcRelConnectsStructuralMemberSpecification.instance;

private RelatingStructuralMember_? : IfcStructuralMember
    private RelatedStructuralConnection_? : IfcStructuralConnection
    private AppliedCondition_? : IfcBoundaryCondition
    private AdditionalConditions_? : IfcStructuralConnectionCondition
    private SupportedLength_? : IfcLengthMeasure
    private ConditionCoordinateSystem_? : IfcAxis2Placement3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsStructuralMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsStructuralMember', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingStructuralMember',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralMember',
			optional: false
		}, 
		{
			name: 'RelatedStructuralConnection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralConnection',
			optional: false
		}, 
		{
			name: 'AppliedCondition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundaryCondition',
			optional: true
		}, 
		{
			name: 'AdditionalConditions',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralConnectionCondition',
			optional: true
		}, 
		{
			name: 'SupportedLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'ConditionCoordinateSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsStructuralMemberSpecification = new IfcRelConnectsStructuralMemberSpecification();
}
