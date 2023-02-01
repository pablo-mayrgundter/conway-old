
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcolour.htm
 */
export default abstract class IfcPreDefinedColour extends IfcPreDefinedItem 
{    
    public readonly specification: IfcPreDefinedColourSpecification = IfcPreDefinedColourSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPreDefinedColourSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedColour';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedColour', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPreDefinedColourSpecification = new IfcPreDefinedColourSpecification();
}
