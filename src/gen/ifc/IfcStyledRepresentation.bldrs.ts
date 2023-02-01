
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyledrepresentation.htm
 */
export default  class IfcStyledRepresentation extends IfcStyleModel 
{    
    public readonly specification: IfcStyledRepresentationSpecification = IfcStyledRepresentationSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStyledRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStyledRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcStyledRepresentation', 'IfcStyleModel', 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStyledRepresentationSpecification = new IfcStyledRepresentationSpecification();
}
