
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshaperepresentation.htm
 */
export default  class IfcShapeRepresentation extends IfcShapeModel 
{    
    public readonly specification: IfcShapeRepresentationSpecification = IfcShapeRepresentationSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcShapeRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShapeRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcShapeRepresentation', 'IfcShapeModel', 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcShapeRepresentationSpecification = new IfcShapeRepresentationSpecification();
}
