
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
 */
export default abstract class IfcStructuralConnection extends IfcStructuralItem 
{    
    public readonly specification: IfcStructuralConnectionSpecification = IfcStructuralConnectionSpecification.instance;

private AppliedCondition_? : IfcBoundaryCondition

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralConnection';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralConnection', 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AppliedCondition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundaryCondition',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralConnectionSpecification = new IfcStructuralConnectionSpecification();
}
