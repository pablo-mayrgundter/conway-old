
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"
import IfcObjectTypeEnum from "./IfcObjectTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassigns.htm
 */
export default abstract class IfcRelAssigns extends IfcRelationship 
{    
    public readonly specification: IfcRelAssignsSpecification = IfcRelAssignsSpecification.instance;

private RelatedObjects_? : Array<IfcObjectDefinition>
    private RelatedObjectsType_? : IfcObjectTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssigns';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObjectDefinition>',
			optional: false
		}, 
		{
			name: 'RelatedObjectsType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsSpecification = new IfcRelAssignsSpecification();
}
