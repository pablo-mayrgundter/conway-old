
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcRelAssignsToActor from "./IfcRelAssignsToActor.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactor.htm
 */
export default  class IfcActor extends IfcObject 
{    
    public readonly specification: IfcActorSpecification = IfcActorSpecification.instance;

private TheActor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcActorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActor';

    public readonly required: ReadonlyArray< string > = [ 'IfcActor', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TheActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcActorSpecification = new IfcActorSpecification();
}
