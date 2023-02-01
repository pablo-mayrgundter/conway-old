
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswitheccentricity.htm
 */
export default  class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember 
{    
    public readonly specification: IfcRelConnectsWithEccentricitySpecification = IfcRelConnectsWithEccentricitySpecification.instance;

private ConnectionConstraint_? : IfcConnectionGeometry

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsWithEccentricitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsWithEccentricity';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsWithEccentricity', 'IfcRelConnectsStructuralMember', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ConnectionConstraint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsWithEccentricitySpecification = new IfcRelConnectsWithEccentricitySpecification();
}
