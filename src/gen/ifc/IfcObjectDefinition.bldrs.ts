
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelAssigns from "./IfcRelAssigns.bldrs"
import IfcRelDecomposes from "./IfcRelDecomposes.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectdefinition.htm
 */
export default abstract class IfcObjectDefinition extends IfcRoot 
{    
    public readonly specification: IfcObjectDefinitionSpecification = IfcObjectDefinitionSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcObjectDefinitionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjectDefinition';

    public readonly required: ReadonlyArray< string > = [ 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcObjectDefinitionSpecification = new IfcObjectDefinitionSpecification();
}
