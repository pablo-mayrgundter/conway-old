
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralSurfaceTypeEnum from "./IfcStructuralSurfaceTypeEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemember.htm
 */
export default  class IfcStructuralSurfaceMember extends IfcStructuralMember 
{    
    public readonly specification: IfcStructuralSurfaceMemberSpecification = IfcStructuralSurfaceMemberSpecification.instance;

private PredefinedType_? : IfcStructuralSurfaceTypeEnum
    private Thickness_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralSurfaceMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSurfaceMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralSurfaceMember', 'IfcStructuralMember', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralSurfaceTypeEnum',
			optional: false
		}, 
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralSurfaceMemberSpecification = new IfcStructuralSurfaceMemberSpecification();
}
