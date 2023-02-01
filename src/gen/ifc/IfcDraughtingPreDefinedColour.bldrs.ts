
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcolour.htm
 */
export default  class IfcDraughtingPreDefinedColour extends IfcPreDefinedColour 
{    
    public readonly specification: IfcDraughtingPreDefinedColourSpecification = IfcDraughtingPreDefinedColourSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDraughtingPreDefinedColourSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingPreDefinedColour';

    public readonly required: ReadonlyArray< string > = [ 'IfcDraughtingPreDefinedColour', 'IfcPreDefinedColour', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDraughtingPreDefinedColourSpecification = new IfcDraughtingPreDefinedColourSpecification();
}
