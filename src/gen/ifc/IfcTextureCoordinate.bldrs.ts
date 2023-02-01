
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationSurface from "./IfcAnnotationSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm
 */
export default abstract class IfcTextureCoordinate extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTextureCoordinateSpecification = IfcTextureCoordinateSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextureCoordinateSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureCoordinate';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextureCoordinate' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextureCoordinateSpecification = new IfcTextureCoordinateSpecification();
}
