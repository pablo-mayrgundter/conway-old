
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralCurveTypeEnum from "./IfcStructuralCurveTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemember.htm
 */
export default  class IfcStructuralCurveMember extends IfcStructuralMember 
{    
    public readonly specification: IfcStructuralCurveMemberSpecification = IfcStructuralCurveMemberSpecification.instance;

private PredefinedType_? : IfcStructuralCurveTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralCurveMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralCurveMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralCurveMember', 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralCurveTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralCurveMemberSpecification = new IfcStructuralCurveMemberSpecification();
}
